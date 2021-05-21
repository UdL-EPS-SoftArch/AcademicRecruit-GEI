import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from 'src/app/models/applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-delete',
  templateUrl: './applicant-delete.component.html',
  styleUrls: ['./applicant-delete.component.css']
})
export class ApplicantDeleteComponent implements OnInit {

  private applicant: Applicant = new Applicant();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.applicantService.get(this.id).subscribe(
      applicant => this.applicant = applicant
    );
  }

  delete(): void {
    this.applicantService.delete(this.applicant).subscribe(
      () => {
        this.router.navigate(['']);
      }
    )
  }

}
