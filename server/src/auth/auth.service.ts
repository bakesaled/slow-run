import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@user/user.service';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { RegistrationStatus } from './registration-status';
import { JwtPayload } from './jwt-payload';
import { UserDto } from '@user/dto/user.dto';
import { LoginUserDto } from '@user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.userService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<UserDto> {
    // find user in db
    return await this.userService.findByLogin(loginUserDto);

    // generate and sign token
    // const token = this._createToken(user);

    // return {
    //   username: user.username,
    //   // ...token,
    // };
  }

  public getCookieWithJwtAccessToken({ username }: UserDto) {
    const payload: JwtPayload = { username };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRES_IN),
    });
    const cookie = `Authentication=${token}; HttpOnly; Path=/; Max-Age=${process.env.JWT_ACCESS_TOKEN_EXPIRES_IN}`;
    return {
      cookie,
      token,
    };
  }

  public getCookieWithJwtRefreshToken({ username }: UserDto) {
    const payload: JwtPayload = { username };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN),
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/auth/refresh; Max-Age=${process.env.JWT_REFRESH_TOKEN_EXPIRES_IN}`;
    return {
      cookie,
      token,
    };
  }

  public getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }
}
