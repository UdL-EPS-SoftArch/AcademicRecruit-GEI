import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { JobApplicationCreateComponent } from './job-application/job-application-create/job-application-create.component';
import { JobApplicationDeleteComponent } from './job-application/job-application-delete/job-application-delete.component';
import { JobApplicationDetailComponent } from './job-application/job-application-detail/job-application-detail.component';
import { JobApplicationEditComponent } from './job-application/job-application-edit/job-application-edit.component';
import { JobApplicationListComponent } from './job-application/job-application-list/job-application-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'jobApplication/create', component: JobApplicationCreateComponent},
  { path: 'jobApplication/:id/delete', component: JobApplicationDeleteComponent},
  { path: 'jobApplication/:id', component: JobApplicationDetailComponent},
  { path: 'jobApplication/:id/edit', component: JobApplicationEditComponent},
  { path: 'jobApplication', component: JobApplicationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
