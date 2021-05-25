import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from 'src/app/models/applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css']
})
export class ApplicantDetailComponent implements OnInit {

  public applicant: Applicant = new Applicant();
  constructor(private route: ActivatedRoute,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.applicantService.get(id).subscribe(
      applicant => this.applicant = applicant
    );
  }

}
