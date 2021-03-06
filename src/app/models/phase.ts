import { Resource} from '@lagoshny/ngx-hal-client';

export class Phase extends Resource{
  id: string;
  phaseNumber: string;
  name: string;
  initialDate: string;
  finalDate: string;
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
