import { NgModule } from '@angular/core';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TaskComponent } from './components/task.component';
import { TodoHomeComponent } from './todo-home.component';
import { TodoComponent } from './components/todo.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
	declarations: [
		TodoComponent,
		TodoCreateComponent,
		TodoListComponent,
		TaskComponent,
		TodoHomeComponent,
		TaskCreateComponent,
		TaskListComponent
	],
	imports: [AppCommonModule],
	exports: [TodoHomeComponent, TaskComponent]
})
export class TodoModule {}
