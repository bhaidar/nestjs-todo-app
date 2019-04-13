import { IsNotEmpty, MaxLength } from 'class-validator';

export class TodoCreateDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(500)
  description?: string;
}
