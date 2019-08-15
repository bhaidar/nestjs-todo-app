import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
	declarations: [TodoComponent, TodoCreateComponent, TodoListComponent],
	imports: [AppCommonModule],
	exports: [TodoComponent]
})
export class TodoModule {}
