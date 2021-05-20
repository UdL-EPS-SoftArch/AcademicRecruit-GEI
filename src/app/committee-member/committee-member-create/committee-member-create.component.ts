import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {CommitteeMemberService} from '../committee-member.service';
import {CommitteeMember} from '../../models/committeeMember';

@Component({
  selector: 'app-committee-member-create',
  templateUrl: './committee-member-create.component.html',
  styleUrls: ['./committee-member-create.component.css']
})
export class CommitteeMemberCreateComponent implements OnInit {

  public committeeMember: CommitteeMember;

  constructor(private router: Router,
              private location: Location,
              private committeeMemberService: CommitteeMemberService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.committeeMember = new CommitteeMember();
  }

  onSubmit(): void{
    this.committeeMemberService.create(this.committeeMember).subscribe(
      (newCommitteeMember: CommitteeMember) => {
        this.router.navigate(['committeemember']);
      });
  }

  onCancel(): void{
    this.location.back();
  }
}
