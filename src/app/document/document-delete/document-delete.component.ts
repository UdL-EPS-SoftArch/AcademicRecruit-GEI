import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from 'src/app/models/document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-delete',
  templateUrl: './document-delete.component.html',
  styleUrls: ['./document-delete.component.css']
})
export class DocumentDeleteComponent implements OnInit {

  public document: Document = new Document();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private documentService: DocumentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.documentService.get(this.id).subscribe(
      document => this.document = document
    );
  }

  delete(): void {
    this.documentService.delete(this.document).subscribe(
      () => {
        this.router.navigate(['']);
      }
    );
  }

}
