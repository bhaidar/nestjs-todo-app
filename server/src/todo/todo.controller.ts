import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TodoListDto } from './dto/todo.list.dto';
import { TodoDto } from './dto/todo.dto';
import { CreateTodoDto } from './dto/todo.create.dto';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '@user/dto/user.dto';

@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(@Req() req: any): Promise<TodoListDto> {
    const todos = await this.todoService.getAllTodo();
    //console.log('csrf: ', req.csrfToken());
    return { todos };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(
    @Body() createTodoDto: CreateTodoDto,
    @Req() req: any,
  ): Promise<TodoDto> {
    const user = <UserDto>req.user;

    return await this.todoService.createTodo(user, createTodoDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async update(
    @Param('id') id: string,
    @Body() todoDto: TodoDto,
  ): Promise<TodoDto> {
    return await this.todoService.updateTodo(id, todoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async destory(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.destoryTodo(id);
  }
}
