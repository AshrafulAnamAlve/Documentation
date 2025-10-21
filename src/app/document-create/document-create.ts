import { Component, inject } from '@angular/core';
import { Service } from '../services/service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-document-create',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './document-create.html',
  styleUrl: './document-create.css'
})
export class DocumentCreate {
  documentObj: any={
    documentId:0,
    documentTypeId:0,
    documentStateId:0,
    coustomerName:'',
    mobileNo:'',
    email:'',
    message:'',
    CreateDate: new Date(),
    resulation:''
  }
  Service = inject(Service);

  typeList: Observable<any> = new Observable<any>();
  stateList: Observable<any> = new Observable<any>();

  constructor(private Mat: MatSnackBar){
    this.typeList = this.Service.getType();
    this.stateList = this.Service.getState();
  }

  onSave(){
    debugger;
    this.Service.createDoc(this.documentObj).subscribe((res:any)=>{
      this.Mat.open('Document Added Successfull','Ok');
    }, error=>{
      debugger
    })
  }
}
