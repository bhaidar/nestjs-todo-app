import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from '@user/entity/user.entity';
import { toUserDto } from '@shared/mapper';
import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }

  async findById(id: string): Promise<UserDto> {
    const user = await this.userRepo.findOne(id);
    return toUserDto(user);
  }

  async create(userDto: UserCreateDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    const user: UserEntity = await this.userRepo.create({
      username,
      password,
      email,
    });

    await this.userRepo.save(user);

    return toUserDto(user);
  }
}
