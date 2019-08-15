import { Injectable } from '@angular/core';
import {
	HttpHeaders,
	HttpClient,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Task } from '../models/task.model';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Authorization: 'my-auth-token'
	})
};

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private baseUrl = 'api/tasks'; // URL to web api

	constructor(private readonly http: HttpClient) {}

	public create(todoId: string, task: Task): Observable<Task> {
		return this.http
			.post<Task>(`${this.baseUrl}/todo/${todoId}`, task, httpOptions)
			.pipe(catchError(this.handleError));
	}

	public findAll(todoId: string): Observable<Task[]> {
		return this.http
			.get<Task[]>(`${this.baseUrl}/todo/${todoId}`, httpOptions)
			.pipe(
				map((results: any) => results.tasks),
				catchError(this.handleError)
			);
	}

	public delete(id: string): Observable<{}> {
		const url = `${this.baseUrl}/${id}`; // DELETE api/tasks/42-5c-...
		return this.http
			.delete(url, httpOptions)
			.pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occured. Handle it accordingly
			console.error('An error occured:', error.error.message);
		} else {
			// The backend returned an unsuccessful respone code.
			// The response body may contain clues as to what was wrong
			console.log(
				`Backend returned code ${error.status}, body was: ${error.status}`
			);
		}

		// return an observable wuth a user-facing error message
		return throwError('Something bad happened; please try again later.');
	}
}
