import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from 'src/app/models/document';
import { DocumentService } from '../document.service';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  public documents: Document[] = [];
  public pageSize = 5;
  public page = 1;
  public totalDocuments = 0;

  constructor(private router: Router,
              private documentService: DocumentService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.documentService.getAll({size: this.pageSize}).subscribe(
      (documents: Document[]) => {
        this.documents = documents;
        this.totalDocuments = this.documentService.totalElement();
      }
    );
  }

  changePage(): void {
    this.documentService.page(this.page - 1).subscribe(
      (documents1: Document[]) => this.documents = documents1
    );
  }

  detail(document: Document): void {
    this.router.navigate(['document', document.id]);
  }

  getCurrentDocument(): Document {
    return this.documentService.getCurrentDocument();
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
