import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/models/document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  public document: Document = new Document();

  constructor(private route: ActivatedRoute,
              private documentService: DocumentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.documentService.get(id).subscribe(
      document => {
        this.document = document;
      }
    );
  }

}
