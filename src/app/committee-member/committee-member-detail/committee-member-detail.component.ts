import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommitteeMember} from '../../models/committeeMember';
import {CommitteeMemberService} from '../committee-member.service';

@Component({
  selector: 'app-committee-member-detail',
  templateUrl: './committee-member-detail.component.html',
  styleUrls: ['./committee-member-detail.component.css']
})
export class CommitteeMemberDetailComponent implements OnInit {

  public committeeMember: CommitteeMember = new CommitteeMember();

  constructor(private route: ActivatedRoute,
              private committeeMemberService: CommitteeMemberService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.committeeMemberService.get(id).subscribe(
      committeeMember => {
        this.committeeMember = committeeMember;
      });
  }

}
