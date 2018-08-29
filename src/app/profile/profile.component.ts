import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../shared/services/local-storage.service';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  
  page:string = "profile";
  arrayName:string = "contactFormArray";
  data;
  count:number;
  profilStatus:boolean = false;
  profilsInfos;
  newsletterArray:string = "newsletterFormArray";
  newsletterData;
  newsletterStatus:boolean = false;
  userNlInfos;
  headerName:string;
  headerEmail:string;
  headerDate:string;
  userAddress:string;
  userSecAddress:string;
  userCity:string;
  userZip:string;

  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
    this.getProfilInfos(this.data,this.arrayName);
    this.setProfilInfos(this.data,this.profilStatus,this.profilsInfos)
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
    this.data = data;
    this.profilStatus = profilStatus;
    this.profilsInfos = profilInfos;
    if(!this.data){
      this.profilStatus = false;
    }else{ 
      this.setCommonInfos(this.data);
      this.profilsInfos = [];
      let userData:any;
      this.data.map((value, index) => {
        userData = new Customer().setCustomer(this.data,index);
        this.profilsInfos.push(userData);
      });
      this.profilStatus = true;
    }
    return this.profilStatus;
  }

  setCommonInfos(data){
    this.data = data;
    this.count = this.data.length;
    this.headerName = this.data[0].data.inputName;
    this.headerEmail = this.data[0].data.inputEmail;
    this.headerDate = this.data[0].postDate;
    this.userAddress = this.data[0].data.inputAddress;
    this.userSecAddress = this.data[0].data.inputAddress2;
    this.userCity = this.data[0].data.inputCity
    this.userZip = this.data[0].data.inputZip;
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
