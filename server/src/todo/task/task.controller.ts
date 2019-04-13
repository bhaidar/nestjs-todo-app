import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Delete,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskListDto } from '../dto/task.list.dto';
import { TaskDto } from '../dto/task.dto';
import { TaskCreateDto } from '@todo/dto/task.create.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get(':id')
  async findOneTask(@Param('id') id: string): Promise<TaskDto> {
    return await this.taskService.getTask(id);
  }

  @Get('todo/:id')
  async findTasksByTodo(@Param('id') id: string): Promise<TaskListDto> {
    const tasks = await this.taskService.getTasksByTodo(id);
    return { tasks };
  }

  @Post('todo/:id')
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard())
  async create(
    @Param('id') todo: string,
    @Body() taskDto: TaskCreateDto,
  ): Promise<TaskDto> {
    return await this.taskService.createTask(todo, taskDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async destory(@Param('id') id: string): Promise<TaskDto> {
    return await this.taskService.destoryTask(id);
  }
}
