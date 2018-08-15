import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  data:string = "";
  arrayName:string = "";  
  
  constructor() {}
  
  setLocalstorage(data,arrayName){
    this.data= data;
    this.arrayName = arrayName;
    localStorage.setItem(this.arrayName, JSON.stringify(this.data));
  }

  getLocalstorage(data,arrayName):any{
    this.data= data;
    this.arrayName = arrayName;
    this.data = JSON.parse(localStorage.getItem(this.arrayName));
    return this.data;
  }

}
