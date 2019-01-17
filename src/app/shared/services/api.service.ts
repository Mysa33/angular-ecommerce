import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  booksRoot: string = "http://henri-potier.xebia.fr/books";
  usersApi:string="";
  offersApi:string="";
  apiRoot:string;
  dataApi:string="";
  
  constructor(private _http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this._http.get(this.booksRoot);
  }
  //Get commercial offers
  getoffers(offersApi){
    this.usersApi = offersApi;
    return this._http.get(this.usersApi);
  }
  //Get users
  getUsers(userRoot){
    this.usersApi = userRoot;
    return this._http.get(this.usersApi);
  }
  //Get data
  getData(apiRoot){
    this.usersApi = apiRoot;
    return this._http.get(this.usersApi);
  }
}