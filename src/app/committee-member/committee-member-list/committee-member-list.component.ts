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
  public committeeMembers: CommitteeMember[] = [];
  public pageSize = 5;
  public page = 1;
  public totalCommitteeMembers = 0;
  private sorting: Sort[] = [{path: 'name', order: 'ASC'}];

  constructor(
    public router: Router,
    public committeeMemberService: CommitteeMemberService) {
  }

  ngOnInit(): void {
    this.committeeMemberService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (committeeMembers: CommitteeMember[]) => {
        this.committeeMembers = committeeMembers;
        this.totalCommitteeMembers = this.committeeMemberService.totalElement();
      });
  }

  changePage(): void{
    this.committeeMemberService.page(this.page - 1).subscribe(
      (committeeMembers1: CommitteeMember[]) => this.committeeMembers = committeeMembers1);
  }

  detail(committeeMember: CommitteeMember): void {
    this.router.navigate(['committeeMembers', committeeMember.id]);
  }

  getCurrentCommitteeMember(): CommitteeMember{
    return this.committeeMemberService.getCurrentCommitteeMember();
  }

}
