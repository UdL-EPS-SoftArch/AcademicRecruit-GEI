import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit {
  public phases: Phase[] = [];
  public pageSize = 5;
  public page = 1;
  public totalPhases = 0;
  
  constructor(public router: Router,
    public phaseService: PhaseService) { }

  ngOnInit(): void {
    this.phaseService.getAll({
      size: this.pageSize
    }).subscribe(
      (phases: Phase[]) => {
        this.phases = phases;
        this.totalPhases = this.phaseService.totalElement();
      }
    );
  }

  changePage(): void {
    this.phaseService.page(this.page - 1).subscribe(
      (phases1: Phase[]) => this.phases = phases1
    );
  }

  detail(phase: Phase): void {
    this.router.navigate(['phase', phase.id]);
  }

  getCurrentPhase(): Phase {
    return this.phaseService.getCurrentPhase();
  }

}
