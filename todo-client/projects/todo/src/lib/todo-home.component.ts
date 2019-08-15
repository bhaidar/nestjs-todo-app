import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-todo-home',
	template: `
    <div class="row my-2">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 bg-light py-3 text-center">
            <h5>Todo Lists</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-2">
            <lib-todo></lib-todo>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div
            class="col-md-12 bg-light py-3 border-left border-3 border-primary text-center"
          >
            <h5>Tasks</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-2">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
	styles: [
		`
      .border-3 {
        border-width: 3px !important;
      }
    `
	]
})
export class TodoHomeComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
