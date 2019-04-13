import { TaskDto } from '@todo/dto/task.dto';
import { TodoEntity } from '@todo/entity/todo.entity';
import { TodoDto } from '@todo/dto/todo.dto';
import { TaskEntity } from '@todo/entity/task.entity';
import { UserEntity } from '@user/entity/user.entity';
import { UserDto } from '@user/dto/user.dto';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description, tasks, owner } = data;

  let todoDto: TodoDto = {
    id,
    name,
    description,
    owner: owner ? toUserDto(owner) : null,
  };

  if (tasks) {
    todoDto = {
      ...todoDto,
      tasks: tasks.map((task: TaskEntity) => toTaskDto(task)),
    };
  }

  return todoDto;
};

export const toTaskDto = (data: TaskEntity): TaskDto => {
  const { id, name } = data;

  let taskDto: TaskDto = {
    id,
    name,
  };

  return taskDto;
};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;

  let userDto: UserDto = {
    id,
    username,
    email,
  };

  return userDto;
};
