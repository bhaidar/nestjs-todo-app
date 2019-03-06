import { TaskDto } from './task.dto';

export class TodoDto {
  id: string;
  name: string;
  createdOn?: Date;
  description?: string;
  tasks?: TaskDto[];
}
