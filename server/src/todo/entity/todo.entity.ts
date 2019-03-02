import { TaskEntity } from './task.entity';

export class TodoEntity {
  id: string;
  name: string;
  description?: string;
  tasks?: TaskEntity[];
}
