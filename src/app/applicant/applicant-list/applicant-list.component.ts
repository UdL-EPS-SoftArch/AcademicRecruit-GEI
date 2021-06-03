import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/models/applicant';
import { ApplicantService } from '../applicant.service';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  public applicants: Applicant[] = [];
  public pageSize = 5;
  public page = 1;
  public totalApplicants = 0;

  constructor(private router: Router,
              private applicantService: ApplicantService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.applicantService.getAll({size: this.pageSize}).subscribe(
      (applicants: Applicant[]) => {
        this.applicants = applicants;
        this.totalApplicants = this.applicantService.totalElement();
      }
    );
  }

  changePage(): void {
    this.applicantService.page(this.page - 1).subscribe(
      (applicants: Applicant[]) => this.applicants = applicants
    );
  }

  getCurrentApplicant(): Applicant{
    return this.applicantService.getCurrentApplicant();
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
