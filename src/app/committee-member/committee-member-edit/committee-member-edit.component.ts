import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommitteeMember} from '../../models/committeeMember';
import {CommitteeMemberService} from '../committee-member.service';

@Component({
  selector: 'app-committee-member-edit',
  templateUrl: './committee-member-edit.component.html',
  styleUrls: ['./committee-member-edit.component.css']
})
export class CommitteeMemberEditComponent implements OnInit {
  public committeeMember: CommitteeMember = new CommitteeMember();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private committeeMemberService: CommitteeMemberService){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.committeeMemberService.get(id).subscribe(
      committeeMember => this.committeeMember = committeeMember);
  }

  onSubmit(): void {
    // tslint:disable-next-line:max-line-length
    this.committeeMemberService.patch(this.committeeMember).subscribe(
      (patchedCommitteeMember: CommitteeMember) => {
        this.router.navigate(['committeemember', this.committeeMember.id]);
      });
  }

}
