import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from '../phase.service';

@Component({
  selector: 'app-phase-detail',
  templateUrl: './phase-detail.component.html',
  styleUrls: ['./phase-detail.component.css']
})
export class PhaseDetailComponent implements OnInit {

  public phase: Phase = new Phase();

  constructor(private route: ActivatedRoute,
              private phaseService: PhaseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.phaseService.get(id).subscribe(
      phase => {
        this.phase = phase;
      }
    );
  }

}
