
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Qualification} from '../models/qualification';

@Injectable()
export class QualificationService extends RestService<Qualification> {

  constructor(injector: Injector) {
    super(Qualification, 'qualification', injector);
  }

  getCurrentQualification(): Qualification {
    return new Qualification(JSON.parse(localStorage.getItem('currentQualification')));
  }
}
