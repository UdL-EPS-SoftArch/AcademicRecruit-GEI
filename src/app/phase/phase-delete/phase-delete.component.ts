import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-delete',
  templateUrl: './phase-delete.component.html',
  styleUrls: ['./phase-delete.component.css']
})
export class PhaseDeleteComponent implements OnInit {

  public phase: Phase = new Phase();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private phaseService: PhaseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.phaseService.get(this.id).subscribe(
      phase => this.phase = phase
    );
  }

  delete(): void {
    this.phaseService.delete(this.phase).subscribe(
      () => {
        this.router.navigate(['']);
      }
    );
  }

}
