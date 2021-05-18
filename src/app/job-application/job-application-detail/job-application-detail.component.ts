import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobApplication} from '../../models/jobApplication';
import {JobApplicationService} from '../jobApplication.service';

@Component({
  selector: 'app-job-application-detail',
  templateUrl: './job-application-detail.component.html',
  styleUrls: ['./job-application-detail.component.css']
})
export class JobApplicationDetailComponent implements OnInit {
  public jobApplication: JobApplication = new JobApplication();

  constructor(private route: ActivatedRoute,
              private jobApplicationService: JobApplicationService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.jobApplicationService.get(id).subscribe(
      jobApplication => {
        this.jobApplication = jobApplication;
      });
  }

}
