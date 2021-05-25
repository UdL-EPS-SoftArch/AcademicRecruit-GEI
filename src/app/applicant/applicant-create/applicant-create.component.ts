import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Applicant } from 'src/app/models/applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-create',
  templateUrl: './applicant-create.component.html',
  styleUrls: ['./applicant-create.component.css']
})
export class ApplicantCreateComponent implements OnInit {

  public applicant: Applicant;

  constructor(private router: Router,
              private location: Location,
              private applicantService: ApplicantService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.applicant = new Applicant();
  }

  onSubmit(): void {
    this.applicantService.create(this.applicant).subscribe(
      (newApplicant: Applicant) => {
        this.router.navigate(['applicant']);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }
}
