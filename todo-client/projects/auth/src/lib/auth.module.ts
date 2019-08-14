import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppCommonModule } from 'projects/app-common/src/public-api';

@NgModule({
	declarations: [LoginComponent],
	imports: [AppCommonModule],
	exports: [LoginComponent]
})
export class AuthModule {}
