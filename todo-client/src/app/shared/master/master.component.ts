import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
	public loggedIn = false;

	constructor(private readonly authService: AuthService) {}

	ngOnInit() {
		this.loggedIn = !!this.authService.currentUserValue;
	}
}
