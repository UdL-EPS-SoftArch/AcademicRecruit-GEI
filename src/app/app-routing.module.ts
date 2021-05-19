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
import {DocumentCreateComponent} from './document/document-create/document-create.component';
import {DocumentDeleteComponent} from './document/document-delete/document-delete.component';
import {DocumentDetailComponent} from './document/document-detail/document-detail.component';
import {DocumentEditComponent} from './document/document-edit/document-edit.component';
import {DocumentListComponent} from './document/document-list/document-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'document/create', component: DocumentCreateComponent},
  { path: 'document/:id/delete', component: DocumentDeleteComponent},
  { path: 'document/:id', component: DocumentDetailComponent},
  { path: 'document/:id/edit', component: DocumentEditComponent},
  { path: 'document', component: DocumentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
