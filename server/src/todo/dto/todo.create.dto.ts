import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';
import { UserDto } from '@user/dto/user.dto';

export class TodoCreateDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsNotEmpty()
  owner: UserDto;
}
