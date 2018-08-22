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
    
  }

  contactForm = new FormGroup({
    inputEmail: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    inputName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    inputAddress: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    inputAddress2: new FormControl('',[Validators.minLength(3), Validators.maxLength(20)]),
    inputCity: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    inputZip: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
    inputTitle : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    inputTxt: new FormControl('',[Validators.required, Validators.minLength(20), Validators.maxLength(250)])
  });

  onSubmit(contactFormArray,storedData):void { 
    if(!this.contactForm.valid){
      alert("le formulaire est invalide.");
      return;
    }else{
      this.storedData = storedData;
      this.getContactData(this.storedData,this.arrayName);
      this.contactFormArray = contactFormArray;
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
    if(this.storedData === null){
      this.storedData = [];
    }
    return this.storedData;
  }
}
