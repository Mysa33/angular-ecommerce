import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  booksRoot: string = "http://henri-potier.xebia.fr/books";
  usersApi:string="";
  offersApi:string="";
  apiRoot:string;
  dataApi:string="";
  
  constructor(private http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this.http.get(this.booksRoot);
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
  //Get data
  getData(apiRoot){
    this.usersApi = apiRoot;
    return this.http.get(this.usersApi);
  }
}