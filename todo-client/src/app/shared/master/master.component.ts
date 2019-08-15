import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';
import { Router } from '@angular/router';

@Component({
	selector: 'app-master',
	template: `
    <div class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="fas fa-tasks"></i>&nbsp;Todozz</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/']"
                [routerLinkActiveOptions]="{ exact: true }"
                routerLinkActive="active"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/todo']"
                [routerLinkActiveOptions]="{ exact: true }"
                routerLinkActive="active"
                >Todo</a
              >
            </li>
            <li *ngIf="loggedIn" class="nav-item">
              <a class="nav-link" (click)="logout()" href="">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="py-5 mt-5">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </section>
  `
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
		this.router.navigate(['/login']);
	}
}
