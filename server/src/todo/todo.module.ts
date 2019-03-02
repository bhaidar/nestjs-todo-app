import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  controllers: [TodoController, TaskController],
  providers: [TodoService, TaskService]
})
export class TodoModule {}
