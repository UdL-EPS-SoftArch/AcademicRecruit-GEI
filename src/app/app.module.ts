import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHalClientModule } from '@lagoshny/ngx-hal-client';
import { ExternalConfigurationService } from './external-configuration-service';

import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { UserService } from './user/user.service';
import { CommitteeMemberService} from './committee-member/committee-member.service';
import { JobApplicationService } from './job-application/jobApplication.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { DocumentCreateComponent } from './document/document-create/document-create.component';
import { DocumentDeleteComponent } from './document/document-delete/document-delete.component';
import { DocumentDetailComponent } from './document/document-detail/document-detail.component';
import { DocumentListComponent } from './document/document-list/document-list.component';
import { DocumentEditComponent } from './document/document-edit/document-edit.component';
import { DocumentSearchComponent } from './document/document-search/document-search.component';
import { CommitteeMemberCreateComponent } from './committee-member/committee-member-create/committee-member-create.component';
import { CommitteeMemberDeleteComponent } from './committee-member/committee-member-delete/committee-member-delete.component';
import { CommitteeMemberDetailComponent } from './committee-member/committee-member-detail/committee-member-detail.component';
import { CommitteeMemberEditComponent } from './committee-member/committee-member-edit/committee-member-edit.component';
import { CommitteeMemberListComponent } from './committee-member/committee-member-list/committee-member-list.component';
import { CommitteeMemberSearchComponent } from './committee-member/committee-member-search/committee-member-search.component';
import { JobApplicationCreateComponent } from './job-application/job-application-create/job-application-create.component';
import { JobApplicationDeleteComponent } from './job-application/job-application-delete/job-application-delete.component';
import { JobApplicationDetailComponent } from './job-application/job-application-detail/job-application-detail.component';
import { JobApplicationEditComponent } from './job-application/job-application-edit/job-application-edit.component';
import { JobApplicationListComponent } from './job-application/job-application-list/job-application-list.component';
import { JobApplicationSearchComponent } from './job-application/job-application-search/job-application-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    DocumentCreateComponent,
    DocumentDeleteComponent,
    DocumentDetailComponent,
    DocumentListComponent,
    DocumentEditComponent,
    DocumentSearchComponent,
    CommitteeMemberCreateComponent,
    CommitteeMemberDeleteComponent,
    CommitteeMemberDetailComponent,
    CommitteeMemberEditComponent,
    CommitteeMemberListComponent,
    CommitteeMemberSearchComponent,
    JobApplicationCreateComponent,
    JobApplicationDeleteComponent,
    JobApplicationDetailComponent,
    JobApplicationEditComponent,
    JobApplicationListComponent,
    JobApplicationSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHalClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, UserService, CommitteeMemberService, JobApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
