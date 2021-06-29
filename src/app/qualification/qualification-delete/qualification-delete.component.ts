import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-delete',
  templateUrl: './qualification-delete.component.html',
  styleUrls: ['./qualification-delete.component.css']
})
export class QualificationDeleteComponent implements OnInit {

  public qualification: Qualification = new Qualification();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private qualificationService: QualificationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.qualificationService.get(this.id).subscribe(
      qualification => this.qualification = qualification
    );
  }

  delete(): void {
    this.qualificationService.delete(this.qualification).subscribe(
      () => {
        this.router.navigate(['']);
      }
    );
  }

}
