import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-task-create',
	template: `
    <div class="row my-2 mb-4">
      <div class="col-md-8 offset-md-2">
        <input
          [(ngModel)]="task"
          (keyup.enter)="OnEnter()"
          class="form-control"
          placeholder="Type a Task and hit (Enter)"
        />
      </div>
    </div>
  `
})
export class TaskCreateComponent implements OnInit {
	public task = '';

	@Output()
	public action: EventEmitter<DoAction> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public OnEnter() {
		this.action.emit({ type: 'add-task', payload: this.task });
		this.task = '';
	}
}
