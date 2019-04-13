import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { TodoEntity } from '@todo/entity/todo.entity';
import { TodoDto } from './dto/todo.dto';
import { toTodoDto } from '@shared/mapper';
import { TodoCreateDto } from './dto/todo.create.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,
  ) {}

  async getAllTodo(): Promise<TodoDto[]> {
    const todos = await this.todoRepo.find({ relations: ['tasks'] });
    return todos.map(todo => toTodoDto(todo));
  }

  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = await this.todoRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });

    if (!todo) {
      throw new HttpException(
        `Todo list doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toTodoDto(todo);
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const { name, description } = todoDto;

    const todo: TodoEntity = await this.todoRepo.create({
      name,
      description,
    });

    await this.todoRepo.save(todo);

    return toTodoDto(todo);
  }

  async updateTodo(todoDto: TodoDto): Promise<TodoDto> {
    const { id, name, description } = todoDto;

    let todo: TodoEntity = await this.todoRepo.findOne({ where: { id } });

    if (!todo) {
      throw new HttpException(
        `Todo list doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    todo = {
      id: todo.id,
      name,
      description,
    };

    await this.todoRepo.update({ id }, todo); // update

    todo = await this.todoRepo.findOne({ where: { id }, relations: ['tasks'] }); // re-query

    return toTodoDto(todo);
  }

  async destoryTodo(id: string): Promise<TodoDto> {
    const todo: TodoEntity = await this.todoRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });

    if (!todo) {
      throw new HttpException(
        `Todo list doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.todoRepo.delete({ id }); // delete todo list

    return toTodoDto(todo);
  }
}
