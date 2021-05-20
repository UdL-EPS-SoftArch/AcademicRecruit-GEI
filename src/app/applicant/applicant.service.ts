<<<<<<< Updated upstream
import { Injectable } from '@angular/core';
=======
import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Applicant } from '../models/applicant';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream
export class ApplicantService {

  constructor() { }
=======
export class ApplicantService extends RestService<Applicant>{

  constructor(injector: Injector) {
    super(Applicant, 'applicants', injector);
  }

  getCurrentApplicant(): Applicant {
    return new Applicant(JSON.parse(localStorage.getItem('currentApplicant')));
  }
>>>>>>> Stashed changes
}
