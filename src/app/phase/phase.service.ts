import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Phase } from '../models/phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService extends RestService<Phase> {

  constructor(injector: Injector) {
    super(Phase, 'phase', injector);
  }

  getCurrentPhase(): Phase {
    return new Phase(JSON.parse(localStorage.getItem('currentPhase')));
  }
}
