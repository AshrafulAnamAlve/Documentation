import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services/service';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-document-list',
  imports: [DatePipe],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList implements OnInit{
  constructor(private router: Router){}
  documentList: any[]=[];
  service =inject(Service);

  ngOnInit():void{
    this.service.getAllDoc().subscribe((res: any)=>{
      this.documentList = res;
    })
  }
  onEdit(id: number){
    this.router.navigate(["/edit-document",id]);
  }
  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this Document?")) {
        this.service.deleteDoc(id).subscribe({
            next: () => {
                alert("Delete Successful");
                this.service.getAllDoc().subscribe({
                    next: (res: any) => {
                        this.documentList = res;
                    },
                    error: (err) => {
                        console.error('Error fetching documents:', err);
                        alert('Failed to refresh document list.');
                    }
                });
            },
            error: (err) => {
                console.error('Error deleting document:', err);
                alert('Failed to delete document.');
            }
        });
    }
}
}
