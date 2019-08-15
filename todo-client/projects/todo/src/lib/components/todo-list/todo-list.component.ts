import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-todo-list',
	template: `
    <div *ngIf="!todos?.length; else show">No todos yet!</div>
    <ng-template #show>
      <div class="list-group">
        <div
          *ngFor="let todo of todos; let i = index; trackBy: trackByFn"
          class="todos"
        >
          <div class="action">
            <button
              (click)="doAction(todo)"
              class="btn btn-danger btn-lg"
              title="Delete {{ todo?.name }}"
            >
              <i class="fa fa-trash"></i>
            </button>
          </div>
          <div class="todo">
            <a
              href="#"
              [routerLink]="['tasks', todo.id]"
              routerLinkActive="list-group-item-primary"
              class="list-group-item list-group-item-action"
            >
              ({{ i + 1 }}) {{ todo?.name }}
            </a>
          </div>
        </div>
      </div>
    </ng-template>
  `,
	styles: [
		`
      .todos {
        display: flex;
        justify-content: center;
      }

      .todos .todo {
        flex-grow: 1;
        flex-shrink: 0;
        max-width: 90%;
      }

      .todos .action {
        margin-right: 5px;
      }
    `
	]
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
