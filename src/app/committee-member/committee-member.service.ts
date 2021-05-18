import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { CommitteeMember} from '../models/committeeMember';

@Injectable()
export class CommitteeMemberService extends RestService<CommitteeMember> {

  constructor(injector: Injector) {
    super(CommitteeMember, 'committeeMember', injector);
  }

  getCurrentCommitteeMember(): CommitteeMember {
    return new CommitteeMember(JSON.parse(localStorage.getItem('currentCommitteeMember')));
  }
}
