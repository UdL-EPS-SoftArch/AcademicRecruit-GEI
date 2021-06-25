import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Qualification } from 'src/app/models/qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.css']
})
export class QualificationDetailComponent implements OnInit {

  public qualification: Qualification = new Qualification();

  constructor(private route: ActivatedRoute,
              private qualificationService: QualificationService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.qualificationService.get(id).subscribe(
      qualification => {
        this.qualification = qualification;
      }
    );
  }

}
