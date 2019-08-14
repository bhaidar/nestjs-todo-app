/**
 * Based on
 * https://github.com/cornflourblue/angular-7-jwt-authentication-example
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface ApplicationUser {
	access_token: string;
	expiresIn: Date;
	username: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<ApplicationUser>;
	public currentUser: Observable<ApplicationUser>;

	constructor(private readonly http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
			JSON.parse(localStorage.getItem('currentUser'))
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): ApplicationUser {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		return this.http.post<any>('/auth/login', { username, password }).pipe(
			map(user => {
				// login successful if there's a jwt token in the response
				if (user && user.access_token) {
					// store; user; details; and; jwt; token in local
					// storage; to; keep; user; logged in between; page; refreshes;

					localStorage.setItem('currentUser', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}

				return user;
			})
		);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}
