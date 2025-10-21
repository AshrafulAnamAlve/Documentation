import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http:HttpClient){}

  getState(){
    return this.http.get("https://localhost:7293/api/Document/GetAllState")
  }
  getType(){
    return this.http.get("https://localhost:7293/api/Document/GetAllType")
  }
  createDoc(obj: any){
    return this.http.post("https://localhost:7293/api/Document/PostDocumnet",obj)
  }
  getAllDoc(){
    return this.http.get("https://localhost:7293/api/Document/GetAllDocument")
  }
  updateDoc(obj: any){
    return this.http.put("https://localhost:7293/api/Document/UpdateDocument",obj)
  }
  deleteDoc(id: number){
    return this.http.delete(`https://localhost:7293/api/Document/deleteDocument/${id}`);
  }
}
