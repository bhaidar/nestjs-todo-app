import { TaskDto } from './task.dto';

export class TodoDto {
  id: string;
  name: string;
  description?: string;
  tasks?: TaskDto[];
}
