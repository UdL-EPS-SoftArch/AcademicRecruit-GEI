import { Router} from '@angular/router';
import {Qualification} from '../../models/qualification';
import {Sort} from '@lagoshny/ngx-hal-client';
import { Component, OnInit } from '@angular/core';
import {QualificationService} from '../qualification.service';

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {

  public qualifications: Qualification[] = [];
  public pageSize = 5;
  public page = 1;
  public totalQualifications = 0;

  constructor(public router: Router,
              public qualificationService: QualificationService) { }

  ngOnInit(): void {
    this.qualificationService.getAll({size: this.pageSize}).subscribe(
      (qualifications: Qualification[]) => {
        this.qualifications = qualifications;
        this.totalQualifications = this.qualificationService.totalElement();
      }
    );
  }

  changePage(): void{
    this.qualificationService.page(this.page - 1).subscribe(
      (qualifications1: Qualification[]) => {
        this.qualifications = qualifications1;
      }
    );
  }

  detail(qualification: Qualification): void {
    this.router.navigate(['qualification', qualification.id]);
  }

  getCurrentQualification(): Qualification{
    return this.qualificationService.getCurrentQualification();
  }
}
