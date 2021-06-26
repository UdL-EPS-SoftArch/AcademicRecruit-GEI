import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-edit',
  templateUrl: './phase-edit.component.html',
  styleUrls: ['./phase-edit.component.css']
})
export class PhaseEditComponent implements OnInit {

  public phase: Phase = new Phase();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private phaseService: PhaseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.phaseService.get(id).subscribe(
      phase => this.phase = phase
    );
  }

  onSubmit(): void {
    this.phaseService.patch(this.phase).subscribe(
      (patchedPhase: Phase) => {
        this.router.navigate(['phase', this.phase.id]);
      }
    );
  }

}
