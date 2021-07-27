import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationStatus } from './registration-status';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { JwtPayload } from './jwt-payload';
import { RequestWithUser } from './request-with-user';
import { UserService } from '@user/user.service';
import JwtRefreshGuard from './jwt-refresh.guard';
import { UserDto } from '@user/dto/user.dto';
import JwtAuthGuard from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(
    @Req() request: RequestWithUser,
    // @Body() user: UserDto,
  ): Promise<UserDto> {
    const { user } = request;
    const accessTokenCookie =
      this.authService.getCookieWithJwtAccessToken(user);
    const refreshTokenCookie =
      this.authService.getCookieWithJwtRefreshToken(user);

    await this.userService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user,
    );

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie.cookie,
      refreshTokenCookie.cookie,
    ]);
    user.refreshToken = refreshTokenCookie.token;
    return user;
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  public async refresh(@Req() request: RequestWithUser) {
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      request.user,
    );

    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(
      request.user,
    );

    await this.userService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      request.user,
    );

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie.cookie,
      refreshTokenCookie.cookie,
    ]);
    request.user.refreshToken = refreshTokenCookie.token;
    return request.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(200)
  async logOut(@Req() request: RequestWithUser) {
    await this.userService.removeRefreshToken(request.user);
    request.res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  public async testAuth(@Req() req: RequestWithUser): Promise<JwtPayload> {
    return req.user;
  }
}
