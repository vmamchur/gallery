import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { AuthDto } from './dto/auth.dto';
import { RefreshDto } from './dto/refresh.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { RefreshTokenGuard } from 'src/common/guards/refresh-token.guard';
import { RequestWithUser } from 'src/common/interfaces/request-with-user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: RequestWithUser) {
    const userId = req.user.sub;

    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refreshTokens(@Req() req: RequestWithUser, @Body() refreshDto: RefreshDto) {
    const userId = req.user.sub;

    return this.authService.refreshTokens(userId, refreshDto.refreshToken);
  }
}
