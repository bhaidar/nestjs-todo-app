import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RouterModule
	],
	exports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RouterModule
	]
})
export class AppCommonModule {}
