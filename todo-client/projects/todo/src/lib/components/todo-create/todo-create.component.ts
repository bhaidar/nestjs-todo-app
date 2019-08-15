import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-todo-create',
	templateUrl: './todo-create.component.html',
	styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
	public todo = '';

	@Output()
	public action: EventEmitter<DoAction> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public OnEnter() {
		this.action.emit({ type: 'add-todo', payload: this.todo });
		this.todo = '';
	}
}
