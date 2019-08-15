import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { AppCommonModule } from 'projects/app-common/src/public-api';

@NgModule({
	declarations: [TodoComponent],
	imports: [AppCommonModule],
	exports: [TodoComponent]
})
export class TodoModule {}
