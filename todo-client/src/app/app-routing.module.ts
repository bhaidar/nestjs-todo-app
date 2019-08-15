import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'projects/auth/src/public-api';
import { MasterComponent } from './shared/master/master.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from 'projects/auth/src/lib/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: MasterComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: HomeComponent
			}
		]
	},
	{
		path: '',
		children: [
			{
				path: 'login',
				component: LoginComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
