import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-todo',
	templateUrl: 'todo.component.html',
	styles: []
})
export class TodoComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	public doAction(task: string): void {
		alert(task);
	}
}
