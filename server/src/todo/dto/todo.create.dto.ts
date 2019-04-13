import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';
import { UserDto } from '@user/dto/user.dto';

export class CreateTodoDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(500)
  description?: string;
}
