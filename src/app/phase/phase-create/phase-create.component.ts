import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-create',
  templateUrl: './phase-create.component.html',
  styleUrls: ['./phase-create.component.css']
})
export class PhaseCreateComponent implements OnInit {
  public phase: Phase;

  constructor(private router: Router,
              private location: Location,
              private phaseService: PhaseService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.phase = new Phase();
  }

  onSubmit(): void {
    this.phaseService.create(this.phase).subscribe(
      (newPhase: Phase) => {
        this.router.navigate(['phase']);
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
