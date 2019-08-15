import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'lib-todo-create',
	templateUrl: './todo-create.component.html',
	styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
	public task = '';

	@Output()
	public action: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public OnEnter() {
		this.action.emit(this.task);
		this.task = '';
	}
}
