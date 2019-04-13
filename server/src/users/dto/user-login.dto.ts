import { IsNotEmpty } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}
