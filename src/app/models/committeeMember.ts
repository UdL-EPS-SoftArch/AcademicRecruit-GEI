import { Resource} from '@lagoshny/ngx-hal-client';

export class CommitteeMember extends Resource{
  id: string;
  rank: string;
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
