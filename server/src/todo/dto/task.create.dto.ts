import { IsNotEmpty } from 'class-validator';

export class TaskCreateDto {
  @IsNotEmpty()
  name: string;
}
