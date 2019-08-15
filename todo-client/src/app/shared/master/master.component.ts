import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';
import { Router } from '@angular/router';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
	public loggedIn = false;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.loggedIn = !!this.authService.currentUserValue;
	}

	public logout(): void {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
