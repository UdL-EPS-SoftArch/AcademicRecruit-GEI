import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { JobApplication } from '../models/jobApplication';

@Injectable()
export class JobApplicationService extends RestService<JobApplication> {

  constructor(injector: Injector) {
    super(JobApplication, 'jobApplications', injector);
  }
}
