import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Document } from 'src/app/models/document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {

  public document: Document;
  constructor(private router: Router,
              private location: Location,
              private documentService: DocumentService,
              private authenticationBasicService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.document = new Document();
  }

  onSubmit(): void {
    this.documentService.create(this.document).subscribe(
      (newDocument: Document) => {
        this.router.navigate(['document']);
      }
    );
  }

  onCancel(): void {
    this.location.back();
  }

}
