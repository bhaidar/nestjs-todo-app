import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'projects/auth/src/public-api';
import { MasterComponent } from './shared/master/master.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from 'projects/auth/src/lib/auth.guard';
import { TodoHomeComponent, TaskComponent } from 'projects/todo/src/public-api';

const routes: Routes = [
	{
		path: '',
		component: MasterComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'todo',
				component: TodoHomeComponent,
				children: [
					{
						path: 'tasks/:id',
						component: TaskComponent
					}
				]
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
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
