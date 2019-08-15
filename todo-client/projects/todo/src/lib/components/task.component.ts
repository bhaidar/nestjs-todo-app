import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { switchMap, startWith, tap } from 'rxjs/operators';
import { DoAction } from 'projects/app-common/src/lib/action';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'lib-task',
	template: `
    <lib-task-create (action)="doAction($event)"></lib-task-create>
    <lib-task-list
      [tasks]="tasks$ | async"
      (action)="doAction($event)"
    ></lib-task-list>
  `
})
export class TaskComponent implements OnInit {
	constructor(
		private readonly activeRoute: ActivatedRoute,
		private readonly taskService: TaskService
	) {}
	public tasks$: Observable<Task[]>;
	private refresh$ = new BehaviorSubject<any>('');
	private activeRoute$: Observable<Params>;
	private todoId = '';

	ngOnInit() {
		this.activeRoute$ = this.activeRoute.params;

		this.tasks$ = combineLatest(this.activeRoute$, this.refresh$).pipe(
			tap(([param, _]) => (this.todoId = param.id)),
			switchMap(([param, _]) => this.taskService.findAll(param.id))
		);
	}

	public doAction({ type, payload }: DoAction): void {
		switch (type) {
			case 'add-task':
				this.createTask(payload);
				break;
			case 'delete-task':
				this.deleteTask(payload);
				break;
			default:
				console.log('Unknown action type');
		}
	}

	private createTask(task: string): void {
		this.taskService
			.create(this.todoId, { name: task })
			.subscribe(() => this.refresh$.next(''));
	}

	private deleteTask(task: Task): void {
		if (confirm('Are you sure you want to delete this item?')) {
			this.taskService.delete(task.id).subscribe(() => this.refresh$.next(''));
		}
	}
}
