import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	AuthModule,
	jwtInterceptorProvider
} from 'projects/auth/src/public-api';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import { MasterComponent } from './shared/master/master.component';
import { HomeComponent } from './shared/home/home.component';
import { TodoModule } from 'projects/todo/src/public-api';
import { errorInterceptorProvider } from 'projects/auth/src/lib/services/error.interceptor';

@NgModule({
	declarations: [AppComponent, MasterComponent, HomeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppCommonModule,
		AuthModule,
		TodoModule
	],
	providers: [jwtInterceptorProvider, errorInterceptorProvider],
	bootstrap: [AppComponent]
})
export class AppModule {}
