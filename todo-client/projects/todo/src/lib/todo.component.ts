import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';
import { switchMap, tap } from 'rxjs/operators';
import { DoAction } from 'projects/app-common/src/public-api';

@Component({
	selector: 'lib-todo',
	templateUrl: 'todo.component.html',
	styles: [
		`
      .border-3 {
        border-width: 3px !important;
      }
    `
	]
})
export class TodoComponent implements OnInit {
	public todos$: Observable<Todo[]>;
	private refresh$ = new BehaviorSubject<any>('');

	constructor(private readonly todoService: TodoService) {}

	ngOnInit() {
		this.todos$ = this.refresh$.pipe(
			switchMap(() => this.todoService.findAll())
		);
	}

	public doAction({ type, payload }: DoAction): void {
		switch (type) {
			case 'add-todo':
				this.createTodo(payload);
				break;
			case 'delete-todo':
				this.deleteTodo(payload);
				break;
			default:
				console.log('Unknown action type');
		}
	}

	private createTodo(todo: string): void {
		this.todoService
			.create({ name: todo })
			.subscribe(() => this.refresh$.next(''));
	}

	private deleteTodo(todo: Todo): void {
		if (confirm('Are you sure you want to delete this item?')) {
			this.todoService
				.deleteTodo(todo.id)
				.subscribe(() => this.refresh$.next(''));
		}
	}
}
