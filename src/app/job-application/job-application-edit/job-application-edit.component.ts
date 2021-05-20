import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JobApplication} from '../../models/jobApplication';
import {JobApplicationService} from '../jobApplication.service';

@Component({
  selector: 'app-job-application-edit',
  templateUrl: './job-application-edit.component.html',
  styleUrls: ['./job-application-edit.component.css']
})
export class JobApplicationEditComponent implements OnInit {
  public jobApplication: JobApplication = new JobApplication();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jobApplicationService: JobApplicationService){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.jobApplicationService.get(id).subscribe(
      jobApplication => this.jobApplication = jobApplication);
  }

  onSubmit(): void {
    // tslint:disable-next-line:max-line-length
    this.jobApplicationService.patch(this.jobApplication).subscribe(
      (patchedJobApplication: JobApplication) => {
        this.router.navigate(['jobApplication', this.jobApplication.id]);
      });
  }
}
