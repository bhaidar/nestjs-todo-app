import { TaskDto } from '@todo/dto/task.dto';
import { TodoEntity } from '@todo/entity/todo.entity';
import { TodoDto } from '@todo/dto/todo.dto';
import { TaskEntity } from '@todo/entity/task.entity';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description, tasks } = data;

  let todoDto: TodoDto = {
    id,
    name,
    description,
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
