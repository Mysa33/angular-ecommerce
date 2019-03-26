import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ApiService {
  
  public booksRoot: string = "http://henri-potier.xebia.fr/books";
  public usersApi:string="";
  public offersApi:string="";
  public apiRoot:string;
  public dataApi:string="";
  
  constructor(private _http:HttpClient) {} 
  //Get Books
  getBooks():Observable<Object> {
    return this._http.get(this.booksRoot);
  }
  //Get commercial offers
  getoffers(offersApi):Observable<Object>{
    this.offersApi = offersApi;
    return this._http.get(this.offersApi);
  }
  //Get users
  getUsers(userRoot):Observable<Object>{
    this.usersApi = userRoot;
    return this._http.get(this.usersApi);
  }
  //Get data
  getData(apiRoot):Observable<Object>{
    this.dataApi = apiRoot;
    return this._http.get(this.dataApi);
  }
}