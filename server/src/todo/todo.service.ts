import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { todos } from 'src/mock/todos.mock';
import { TodoEntity } from './entity/todo.entity';
import { TodoDto } from './dto/todo.dto';
import { toPromise } from './shared/utils';
import { toTodoDto } from './shared/mapper';
import { TodoCreateDto } from './dto/todo.create.dto';

import * as uuid from 'uuid';

@Injectable()
export class TodoService {
  todos: TodoEntity[] = todos;

  async getAllTodo(): Promise<TodoDto[]> {
    return toPromise(this.todos.map(todo => toTodoDto(todo)));
  }

  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(
        `Todo item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toPromise(toTodoDto(todo));
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const { name, description } = todoDto;

    const todo: TodoEntity = {
      id: uuid(),
      name,
      description,
    };

    this.todos.push(todo);

    return toPromise(toTodoDto(todo));
  }

  async updateTodo(todoDto: TodoDto): Promise<TodoDto> {
    const { id, name, description } = todoDto;

    let todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(
        `Todo item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    todo = {
      id: todo.id,
      name,
      description,
    };

    this.todos = this.todos.filter(todo => todo.id !== id); // remove old object
    this.todos.push(todo); // add new object

    return toPromise(toTodoDto(todo));
  }

  async destoryTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find(todo => todo.id === id);
    this.todos = this.todos.filter(todo => todo.id !== id);
    return toPromise(toTodoDto(todo));
  }
}
