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
  newsletterArray:string = "newsletterFormArray";
  newsletterData;

  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
    this.getProfilInfos(this.data,this.arrayName);
    this.getNewsletterInfos(this.newsletterData,this.newsletterArray);
  }

  getProfilInfos(data,arrayName){
    this.data= data;
    this.arrayName = arrayName;
    this.data = this._profilService.getLocalstorage(this.data,this.arrayName);
    console.log("data in profil : ",this.data);
    return this.data;
  }

  getNewsletterInfos(newsletterData,newsletterArray){
    this.newsletterData= newsletterData;
    this.newsletterArray = newsletterArray;
    this.newsletterData = this._profilService.getLocalstorage(this.newsletterData,this.newsletterArray);
    console.log("newsletterData in profil : ",this.newsletterData);
    return this.newsletterData;
  }

}
