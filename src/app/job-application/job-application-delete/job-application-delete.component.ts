import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { JobApplicationService } from '../jobApplication.service';

@Component({
  selector: 'app-job-application-delete',
  templateUrl: './job-application-delete.component.html',
  styleUrls: ['./job-application-delete.component.css']
})
export class JobApplicationDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  delete(): void {
   /* this.JobApplicationService.delete(this.user).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });*/
  }
}
