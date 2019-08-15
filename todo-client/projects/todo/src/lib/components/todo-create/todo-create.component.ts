import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-todo-create',
	template: `
    <div class="row my-2 mb-4">
      <div class="col-md-8 offset-md-2">
        <input
          [(ngModel)]="todo"
          (keyup.enter)="OnEnter()"
          class="form-control"
          placeholder="Type a Todo and hit (Enter)"
        />
      </div>
    </div>
  `
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
