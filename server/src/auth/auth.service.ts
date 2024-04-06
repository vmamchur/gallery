import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async register(createUserDto: CreateUserDto) {
    const userExists = await this.usersService.findByUsername(
      createUserDto.username,
    );

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await argon2.hash(createUserDto.password);
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });
    const { accessToken, refreshToken } = await this.getTokens(
      user.id,
      user.username,
    );

    await this.usersService.update(user.id, {
      refreshToken,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async login(authDto: AuthDto) {
    const user = await this.usersService.findByUsername(authDto.username);

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const passwordMatches = await argon2.verify(
      user.password,
      authDto.password,
    );

    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }

    const { accessToken, refreshToken } = await this.getTokens(
      user.id,
      user.username,
    );

    await this.usersService.update(user.id, {
      refreshToken,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async logout(userId: string) {
    return this.usersService.update(userId, { refreshToken: null });
  }

  async getTokens(userId: string, username: string) {
    const accessToken = await this.jwtService.signAsync(
      {
        sub: userId,
        username,
      },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        sub: userId,
        username,
      },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(refreshToken: string) {
    const user = await this.usersService.findByRefreshToken(refreshToken);

    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Access denied');
    }

    if (refreshToken !== user.refreshToken) {
      throw new ForbiddenException('Access denied');
    }

    const { accessToken, refreshToken: createdRefreshToken } =
      await this.getTokens(user.id, user.username);

    await this.usersService.update(user.id, {
      refreshToken: createdRefreshToken,
    });

    return {
      user,
      accessToken,
      refreshToken: createdRefreshToken,
    };
  }
}
