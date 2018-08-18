import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactFormArray;
  storedData;
  arrayName:string = "contactFormArray";
  
  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
    this.getContactData(this.storedData,this.arrayName);
  }

  contactForm = new FormGroup({
    inputEmail: new FormControl('',[Validators.required]),
    inputName: new FormControl('',[Validators.required]),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    inputTitle : new FormControl('',[Validators.required]),
    inputTxt: new FormControl('',[Validators.required])
  });

  onSubmit(contactFormArray):void { 
    if(this.contactForm.value.inputEmail === ""){
      alert("le formulaire est invalide est vide.");
      return;
    }else{
      this.contactFormArray = contactFormArray;
      this.contactFormArray = this.contactFormArray;
      let postDate:any = new Date();
      postDate = postDate.getDate() + "/" + postDate.getMonth() + "/" + postDate.getFullYear();
      let flag:boolean = true;
      this.contactFormArray = {
        "data" : this.contactForm.value,
        "postDate" : postDate,
        "flag" : flag
      };
      this.storedData.push(this.contactFormArray);
      this._profilService.setLocalstorage(this.storedData,this.arrayName);
    }   
  }

  getContactData(storedData,arrayName):any{
    this.storedData= storedData;
    this.arrayName = arrayName;
    this.storedData = this._profilService.getLocalstorage(this.storedData,this.arrayName);
    console.log("storedData", this.storedData);
    if(this.storedData === null){
      console.log("nul :",)

    }
    return this.storedData;
  }
}
