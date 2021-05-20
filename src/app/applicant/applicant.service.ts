import { Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Applicant } from '../models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService extends RestService<Applicant> {

  constructor(injector: Injector) {
    super(Applicant, 'applicants', injector);
  }

  getCurrentApplicant(): Applicant {
    return new Applicant(JSON.parse(localStorage.getItem('currentApplicant')));
  }
}
