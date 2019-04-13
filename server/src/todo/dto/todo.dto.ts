import { TaskDto } from './task.dto';
import { IsNotEmpty } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  createdOn?: Date;
  description?: string;
  tasks?: TaskDto[];
}
