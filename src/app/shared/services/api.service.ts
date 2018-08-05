import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  apiRoot: string = "http://henri-potier.xebia.fr/books";
  usersApi:string="";
  offersApi:string="";
  constructor(private http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this.http.get(this.apiRoot);
  }
  //Get commercial offers
  getoffers(offersApi){
    this.usersApi = offersApi;
    return this.http.get(this.usersApi);
  }
  //Get users
  getUsers(userRoot){
    this.usersApi = userRoot;
    return this.http.get(this.usersApi);
  }
}