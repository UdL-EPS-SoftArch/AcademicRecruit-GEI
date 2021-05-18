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
import {QualificationCreateComponent} from './qualification/qualification-create/qualification-create.component';
import {QualificationDeleteComponent} from './qualification/qualification-delete/qualification-delete.component';
import {QualificationDetailComponent} from './qualification/qualification-detail/qualification-detail.component';
import {QualificationEditComponent} from './qualification/qualification-edit/qualification-edit.component';
import {QualificationListComponent} from './qualification/qualification-list/qualification-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'qualification/create', component: QualificationCreateComponent},
  { path: 'qualification/:id/delete', component: QualificationDeleteComponent},
  { path: 'qualification/:id', component: QualificationDetailComponent},
  { path: 'qualification/:id/edit', component: QualificationEditComponent},
  { path: 'qualification', component: QualificationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
