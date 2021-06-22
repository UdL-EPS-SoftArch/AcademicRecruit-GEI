import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from 'src/app/models/document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  public document: Document = new Document();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private documentService: DocumentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.documentService.get(id).subscribe(
      document => this.document = document
    );
  }

  onSubmit(): void {
    this.documentService.patch(this.document).subscribe(
      (patchedDocument: Document) => {
        this.router.navigate(['document', this.document.id]);
      }
    );
  }

}
