import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpErrorResponse,
	HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((err: HttpErrorResponse) => {
				if (err.status === 401 && !window.location.href.includes('/login')) {
					// auto logout if 401 response returned from api
					this.authService.logout();
					location.reload();
				}

				const error = err.error.error || err.error.message || err.statusText;

				alert(error);

				return throwError(error);
			})
		);
	}
}

export const errorInterceptorProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: ErrorInterceptor,
	multi: true
};
