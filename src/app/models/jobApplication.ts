import { Resource } from '@lagoshny/ngx-hal-client';

export class JobApplication extends Resource {
  id: string;
  name: string;
  description: string;
  requirements: string;
  evaluationCriteria: string;
  currentPhase: string;

  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
