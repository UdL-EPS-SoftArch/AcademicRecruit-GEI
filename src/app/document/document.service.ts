import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends RestService<Document>{

  constructor(injector: Injector) {
    super(Document, 'documents', injector);
  }

  getCurrentDocument(): Document {
    return new Document(JSON.parse(localStorage.getItem('currentDocument')));
  }
}
