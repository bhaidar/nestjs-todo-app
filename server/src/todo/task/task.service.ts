import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TaskCreateDto } from '../dto/task.create.dto';
import { TaskDto } from '../dto/task.dto';
import { todos } from 'src/mock/todos.mock';
import { TodoEntity } from '../entity/todo.entity';
import { TaskEntity } from '../entity/task.entity';
import { toPromise } from '@shared/utils';
import { toTaskDto } from '@shared/mapper';

@Injectable()
export class TaskService {
  todos: TodoEntity[] = todos;

  async getTask(id: string): Promise<TaskDto> {
    const task = this._getTask(id);

    if (!task) {
      throw new HttpException(`Task doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toPromise(toTaskDto(task));
  }

  async getTasksByTodo(id: string): Promise<TaskDto[]> {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(`Todo doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toPromise(todo.tasks.map(task => toTaskDto(task)));
  }

  async createTask(taskDto: TaskCreateDto): Promise<TaskDto> {
    throw new Error('Not implemented');
  }

  async destoryTask(id: string): Promise<TaskDto> {
    throw new Error('Not implemented');
  }

  private _getTask(id: string): TaskEntity {
    for (let todo of this.todos) {
      const task = todo.tasks.find(task => task.id === id);

      if (task) return task;
    }
    return undefined;
  }
}
