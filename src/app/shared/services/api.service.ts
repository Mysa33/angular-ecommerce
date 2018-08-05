import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  apiRoot: string = "http://henri-potier.xebia.fr/books";
  constructor(private http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this.http.get(this.apiRoot);
  }
}