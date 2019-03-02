import { TodoEntity } from '../entity/todo.entity';
import { TodoDto } from '../dto/todo.dto';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  let todoDto: TodoDto = {
    id,
    name,
    description,
  };

  return todoDto;
};
