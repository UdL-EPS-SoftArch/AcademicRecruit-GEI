import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicationService } from '../jobApplication.service';
import {JobApplication} from '../../models/jobApplication';


@Component({
  selector: 'app-job-application-delete',
  templateUrl: './job-application-delete.component.html',
  styleUrls: ['./job-application-delete.component.css']
})
export class JobApplicationDeleteComponent implements OnInit {
  public jobApplication: JobApplication = new JobApplication();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jobApplicationService: JobApplicationService){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.jobApplicationService.get(this.id).subscribe(
      jobApplication => this.jobApplication = jobApplication);
  }


  delete(): void {
    this.jobApplicationService.delete(this.jobApplication).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}
