import { Router } from '@angular/router';
import { CommitteeMemberService} from '../committee-member.service';
import { Sort } from '@lagoshny/ngx-hal-client';
import {Component, OnInit} from '@angular/core';
import {CommitteeMember} from '../../models/committeeMember';

@Component({
  selector: 'app-committee-member-list',
  templateUrl: './committee-member-list.component.html',
  styleUrls: ['./committee-member-list.component.css']
})
export class CommitteeMemberListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
