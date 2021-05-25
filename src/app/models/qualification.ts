import { Resource} from '@lagoshny/ngx-hal-client';

export class Qualification extends Resource{
  id: string;
  mark: string;
  observation: string;
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
