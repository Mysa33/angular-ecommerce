import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  apiRoot: string = "http://henri-potier.xebia.fr/books";
  userRoot:string="";
  constructor(private http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this.http.get(this.apiRoot);
  }
  //Get users
  getUsers(userRoot){
    this.userRoot = userRoot;
    return this.http.get(this.userRoot);
  }
}