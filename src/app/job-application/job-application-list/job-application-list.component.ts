import { Router } from '@angular/router';
import { JobApplicationService } from '../jobApplication.service';
import { Sort } from '@lagoshny/ngx-hal-client';
import {Component, OnInit} from '@angular/core';
import {JobApplication} from '../../models/jobApplication';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {
  public jobApplications: JobApplication[] = [];
  public pageSize = 5;
  public page = 1;
  public totalJobApplications = 0;
  private sorting: Sort[] = [{ path: 'name', order: 'ASC' }];

  constructor(
    public router: Router,
    private jobApplicationService: JobApplicationService) {
 }

  ngOnInit(): void {
    this.jobApplicationService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (jobApplications: JobApplication[]) => {
        this.jobApplications = jobApplications;
        this.totalJobApplications = this.jobApplicationService.totalElement();
      });
  }

  changePage(): void {
    this.jobApplicationService.page(this.page - 1).subscribe(
      (jobApplications1: JobApplication[]) => this.jobApplications = jobApplications1);
  }

  detail(jobApplication: JobApplication): void {
    this.router.navigate(['jobApplications', jobApplication.id]);
  }

  getCurrentJobApplication(): JobApplication {
    return this.jobApplicationService.getCurrentJobApplication();
  }
}
