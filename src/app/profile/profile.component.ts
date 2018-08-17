import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  page:string = "profile";
  arrayName:string = "contactFormArray";
  data;
  profilStatus:boolean = false;
  profilInfos;
  newsletterArray:string = "newsletterFormArray";
  newsletterData;
  newsletterStatus:boolean = false;
  userNlInfos;

  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
    this.getProfilInfos(this.data,this.arrayName);
    this.setProfilInfos(this.data,this.profilStatus,this.profilInfos)
    this.getNewsletterInfos(this.newsletterData,this.newsletterArray);
    this.setNewsletterInfos(this.newsletterData,this.newsletterStatus,this.userNlInfos)
  }

  getProfilInfos(data,arrayName):any{
    this.data= data;
    this.arrayName = arrayName;
    this.data = this._profilService.getLocalstorage(this.data,this.arrayName);
    return this.data;
  }

  setProfilInfos(data,profilStatus,profilInfos):boolean{
    this.data = data.data;
    this.profilStatus = profilStatus;
    this.profilInfos = profilInfos;
    if(!this.data){
      this.profilStatus = false;
    }else{ 
      this.profilInfos = {
        "count":1,
        "email":this.data.inputEmail,
        "date":"N.A",
        "name":this.data.inputName,
        "address":this.data.inputAddress,
        "address2":this.data.inputAddress2,
        "city":this.data.inputCity,
        "zip":this.data.inputZip,
        "message":this.data.inputTxt
      };
      this.profilStatus = true;
    }
    return this.profilStatus;
  }

  getNewsletterInfos(newsletterData,newsletterArray):any{
    this.newsletterData= newsletterData;
    this.newsletterArray = newsletterArray;
    this.newsletterData = this._profilService.getLocalstorage(this.newsletterData,this.newsletterArray);
    return newsletterData;
  }

  setNewsletterInfos(newsletterData,newsletterStatus,userNlInfos):boolean{
    this.newsletterData = newsletterData;
    this.newsletterStatus = newsletterStatus;
    this.userNlInfos = userNlInfos;
    if(!this.newsletterData){
      this.newsletterStatus = false;
    }else{ 
      this.userNlInfos = {
        "email":this.newsletterData.email.inputNewsletter,
        "date":this.newsletterData.insDate
      };
      this.newsletterStatus = true;
    }
    return this.newsletterStatus;
  }
}
