import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'projects/auth/src/public-api';
import { AppCommonModule } from 'projects/app-common/src/public-api';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, AppCommonModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
