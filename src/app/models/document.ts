import { Resource} from '@lagoshny/ngx-hal-client';

export class Document extends Resource{
  id: string;
  name: string;
  path: string;
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
