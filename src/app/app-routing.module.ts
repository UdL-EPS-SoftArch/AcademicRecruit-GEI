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
import {ApplicantCreateComponent} from './applicant/applicant-create/applicant-create.component';
import {ApplicantDeleteComponent} from './applicant/applicant-delete/applicant-delete.component';
import {ApplicantDetailComponent} from './applicant/applicant-detail/applicant-detail.component';
import {ApplicantEditComponent} from './applicant/applicant-edit/applicant-edit.component';
import {ApplicantListComponent} from './applicant/applicant-list/applicant-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'applicant/create', component: ApplicantCreateComponent},
  { path: 'applicant/:id/delete', component: ApplicantDeleteComponent},
  { path: 'applicant/:id', component: ApplicantDetailComponent},
  { path: 'applicant/:id/edit', component: ApplicantEditComponent},
  { path: 'applicant', component: ApplicantListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
