import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitteeMemberService } from '../committee-member.service';
import {CommitteeMember} from '../../models/committeeMember';

@Component({
  selector: 'app-committee-member-delete',
  templateUrl: './committee-member-delete.component.html',
  styleUrls: ['./committee-member-delete.component.css']
})
export class CommitteeMemberDeleteComponent implements OnInit {

  public committeeMember: CommitteeMember = new CommitteeMember();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private committeeMemberService: CommitteeMemberService){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.committeeMemberService.get(this.id).subscribe(
      committeeMember => this.committeeMember = committeeMember);
  }


  delete(): void {
    this.committeeMemberService.delete(this.committeeMember).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}
