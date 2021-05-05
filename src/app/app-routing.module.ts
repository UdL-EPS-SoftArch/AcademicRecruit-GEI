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
import {CommitteeMemberCreateComponent} from './committee-member/committee-member-create/committee-member-create.component';
import {CommitteeMemberDeleteComponent} from './committee-member/committee-member-delete/committee-member-delete.component';
import {CommitteeMemberEditComponent} from './committee-member/committee-member-edit/committee-member-edit.component';
import {CommitteeMemberListComponent} from './committee-member/committee-member-list/committee-member-list.component';
import {CommitteeMemberDetailComponent} from './committee-member/committee-member-detail/committee-member-detail.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'committeemember/create', component: CommitteeMemberCreateComponent},
  { path: 'committeemember/:id/delete', component: CommitteeMemberDeleteComponent},
  { path: 'committeemember/:id', component: CommitteeMemberDetailComponent},
  { path: 'committeemember/:id/edit', component: CommitteeMemberEditComponent},
  { path: 'committeemember', component: CommitteeMemberListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
