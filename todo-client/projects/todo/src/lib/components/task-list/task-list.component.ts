import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoAction } from 'projects/app-common/src/public-api';
import { Task } from '../../models/task.model';

@Component({
	selector: 'lib-task-list',
	template: `
    <div *ngIf="!tasks?.length; else show"><p>No tasks yet!</p></div>
    <ng-template #show>
      <div class="list-group">
        <div
          *ngFor="let task of tasks; let i = index; trackBy: trackByFn"
          class="tasks"
        >
          <div class="action">
            <button
              (click)="doAction(task)"
              class="btn btn-danger btn-lg"
              title="Delete {{ task?.name }}"
            >
              <i class="fa fa-trash"></i>
            </button>
          </div>
          <div class="task">
            <div class="list-group-item">({{ i + 1 }}) {{ task?.name }}</div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
	styles: [
		`
      .tasks {
        display: flex;
        justify-content: center;
      }

      .tasks .task {
        flex-grow: 1;
        flex-shrink: 0;
      }

      .tasks .action {
        margin-right: 5px;
      }
    `
	]
})
export class TaskListComponent implements OnInit {
	@Input()
	public tasks: Task[];

	@Output()
	public action: EventEmitter<DoAction> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public trackByFn(index: number, item: Task) {
		return index;
	}

	public doAction(task: Task): void {
		this.action.emit({ type: 'delete-task', payload: task });
	}
}
