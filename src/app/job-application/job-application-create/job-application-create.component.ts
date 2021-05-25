import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {JobApplicationService} from '../jobApplication.service';
import {JobApplication} from '../../models/jobApplication';

@Component({
  selector: 'app-job-application-create',
  templateUrl: './job-application-create.component.html',
  styleUrls: ['./job-application-create.component.css']
})
export class JobApplicationCreateComponent implements OnInit {

  public jobApplication: JobApplication;

  constructor(private router: Router,
              private location: Location,
              private jobApplicationService: JobApplicationService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.jobApplication = new JobApplication();
  }

  onSubmit(): void {
    this.jobApplicationService.create(this.jobApplication).subscribe(
      (newApplication: JobApplication) => {
        this.router.navigate(['jobApplication']);
      });
  }

  onCancel(): void {
    this.location.back();
  }

}
