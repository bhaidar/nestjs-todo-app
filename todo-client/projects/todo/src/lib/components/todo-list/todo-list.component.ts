import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	@Input()
	public todos: Todo[];

	@Output()
	public action: EventEmitter<DoAction> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public trackByFn(index: number, item: Todo) {
		return index;
	}

	public doAction(todo: Todo): void {
		this.action.emit({ type: 'delete-todo', payload: todo });
	}
}
