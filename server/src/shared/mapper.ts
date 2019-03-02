import { TaskEntity } from 'src/todo/entity/task.entity';
import { TaskDto } from 'src/todo/dto/task.dto';
import { TodoEntity } from 'src/todo/entity/todo.entity';
import { TodoDto } from 'src/todo/dto/todo.dto';

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
