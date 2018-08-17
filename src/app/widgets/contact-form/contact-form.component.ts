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
    inputTitle : new FormControl(''),
    inputTxt: new FormControl('')
  });

  onSubmit(contactFormArray):any { 
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
      this._profilService.setLocalstorage(this.contactFormArray,this.arrayName);
      return this.contactFormArray = {};
    }   
  }
}
