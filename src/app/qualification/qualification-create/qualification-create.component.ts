import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-create',
  templateUrl: './qualification-create.component.html',
  styleUrls: ['./qualification-create.component.css']
})
export class QualificationCreateComponent implements OnInit {

  public qualification: Qualification;

  constructor(private router: Router,
              private location: Location,
              private qualificationService: QualificationService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.qualification = new Qualification();
  }

  onSubmit(): void {
    this.qualificationService.create(this.qualification).subscribe(
      (newQualification: Qualification) => {
        this.router.navigate(['']);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }

}
