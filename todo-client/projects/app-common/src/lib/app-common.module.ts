import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
	exports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class AppCommonModule {}
