import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from 'src/app/models/applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-edit',
  templateUrl: './applicant-edit.component.html',
  styleUrls: ['./applicant-edit.component.css']
})
export class ApplicantEditComponent implements OnInit {
  public applicant: Applicant = new Applicant();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.applicantService.get(id).subscribe(
      applicant => this.applicant = applicant
    );
  }

  onSubmit(): void {
    this.applicantService.patch(this.applicant).subscribe(
      (patchedApplicant: Applicant) => {
        this.router.navigate(['applicant', this.applicant.id]);
      }
    );
  }

}
