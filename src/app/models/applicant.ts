<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { Resource} from '@lagoshny/ngx-hal-client';

export class Applicant extends Resource{
  id: string;
<<<<<<< Updated upstream
  email: string
  name: string;
  lastname: string;
  DNI: string;
=======
  email: string;
  name: string;
  lastname: string;
  dni: string

  uri: string;
>>>>>>> Stashed changes
  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
