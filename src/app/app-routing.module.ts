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
import {PhaseCreateComponent} from './phase/phase-create/phase-create.component';
import {PhaseDeleteComponent} from './phase/phase-delete/phase-delete.component';
import {PhaseDetailComponent} from './phase/phase-detail/phase-detail.component';
import {PhaseEditComponent} from './phase/phase-edit/phase-edit.component';
import {PhaseListComponent} from './phase/phase-list/phase-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'phase/create', component: PhaseCreateComponent},
  { path: 'phase/:id/delete', component: PhaseDeleteComponent},
  { path: 'phase/:id', component: PhaseDetailComponent},
  { path: 'phase/:id/edit', component: PhaseEditComponent},
  { path: 'phase', component: PhaseListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
