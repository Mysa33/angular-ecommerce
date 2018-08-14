import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocalStorageService } from '../shared/services/local-storage.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactFormArray;
  arrayName:string = "contactFormArray";

  constructor(private _profilService:LocalStorageService) { }

  ngOnInit() {
  }

  contactForm = new FormGroup({
    inputEmail: new FormControl('',[Validators.required]),
    inputName: new FormControl('',[Validators.required]),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    inputTxt: new FormControl('')
  });

  onSubmit(contactFormArray):any { 
    if(this.contactForm.value.length === 0){
      alert("le champs est vide.");
      return;
    }else{
      this.contactFormArray = contactFormArray;
      this.contactFormArray = this.contactFormArray;
      const insDate:Date = new Date();
      let flag:boolean = true;
      this.contactFormArray = {
        "email" : this.contactForm.value,
        "insDate" : insDate,
        "flag" : flag
      };
      this._profilService.setLocalstorage(this.contactFormArray,this.arrayName);
      return this.contactFormArray = {};
    }   
  }

}
