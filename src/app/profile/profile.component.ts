import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  arrayName:string = "contactFormArray";
  data;
  newsletterArray:string = "contactFormArray";
  newsletterData;

  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
    this.getProfilInfos(this.data,this.arrayName);
  }

  getProfilInfos(data,arrayName){
    this.data= data;
    this.arrayName = arrayName;
    this.data = this._profilService.getLocalstorage(this.data,this.arrayName);
    console.log("data in profil : ",this.data);
    return this.data;
  }


}
