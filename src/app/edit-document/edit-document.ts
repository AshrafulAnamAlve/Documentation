import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Service } from '../services/service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-document',
  imports: [AsyncPipe, FormsModule, RouterLink],
  templateUrl: './edit-document.html',
  styleUrl: './edit-document.css'
})
export class EditDocument {
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
  Service = inject(Service)
 typeList: Observable<any> = new Observable<any>();
  stateList: Observable<any> = new Observable<any>();

  constructor(private Mat: MatSnackBar,private route:ActivatedRoute, private router:Router){
    this.typeList = this.Service.getType();
    this.stateList = this.Service.getState();
  }

  ngOnInit(): void{
    const id =this.route.snapshot.params['id'];
    this.Service.getAllDoc().subscribe((data: any)=>{
      const found = data.find((e: any)=> e.documentId == id);
      if(found)this.documentObj =found;
    });
  }

  onUpdate(){
    this.Service.updateDoc(this.documentObj).subscribe(()=>{
      alert('Document Update Successfull');
      this.router.navigate(["/document-list"]);
    })
  }

}
