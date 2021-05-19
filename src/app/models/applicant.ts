
import { Resource} from '@lagoshny/ngx-hal-client';

export class Applicant extends Resource{
  id: string;
  email: string
  name: string;
  lastname: string;
  DNI: string;
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
