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

  constructor() { }

  ngOnInit(): void {
  }

}
