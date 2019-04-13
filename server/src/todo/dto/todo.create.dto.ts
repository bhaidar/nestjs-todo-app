import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class TodoCreateDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(500)
  description?: string;
}
