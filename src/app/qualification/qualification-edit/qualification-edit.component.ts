import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-edit',
  templateUrl: './qualification-edit.component.html',
  styleUrls: ['./qualification-edit.component.css']
})
export class QualificationEditComponent implements OnInit {

  public qualification: Qualification = new Qualification();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private qualificationService: QualificationService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.qualificationService.get('id').subscribe(
      qualification => {
        this.qualification = qualification;
      }
    );
  }

  onSubmit(): void {
    this.qualificationService.patch(this.qualification).subscribe(
      (patchedQualification: Qualification) => {
        this.router.navigate(['qualification', this.qualification.id]);
      }
    );
  }
}
