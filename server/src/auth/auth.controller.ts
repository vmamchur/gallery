import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
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
    const { userId } = req.user;

    return this.authService.logout(userId);
  }

  @Post('refresh')
  refreshTokens(@Body() { refreshToken }: { refreshToken: string }) {
    return this.authService.refreshTokens(refreshToken);
  }
}
