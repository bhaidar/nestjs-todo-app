import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from '@user/dto/user.dto';
import { UserCreateDto } from '@user/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { get } from 'http';
import { AuthGuard } from '@nestjs/passport';
import { AdvancedConsoleLogger } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  public async register(
    @Body() createUserDto: UserCreateDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  public async login(@Body() userLoginDto: UserLoginDto): Promise<LoginStatus> {
    return await this.authService.login(userLoginDto);
  }

  @Get('whoami')
  @UseGuards(AuthGuard())
  public async testAuth(@Req() req: any): Promise<JwtPayload> {
    console.log(req.user);
    return req.user;
  }
}
