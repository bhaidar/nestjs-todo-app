import { Injectable } from '@nestjs/common';
import { UserCreateDto } from '@user/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { UsersService } from '@user/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(userDto: UserCreateDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      const user = await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }
}
