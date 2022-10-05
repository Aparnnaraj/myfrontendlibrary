import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  addbooks(data:any){
    console.log(data);
    return this.http.post<any>('http://localhost:3000/addbook',data);
  }
  getbooks(){
    return this.http.get("http://localhost:3000/booklist");
  }
}
