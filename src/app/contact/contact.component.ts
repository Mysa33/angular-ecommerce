import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactFormArray;
  constructor() { }

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
      this.contactFormArray = JSON.stringify(this.contactFormArray);
      localStorage.setItem('contactFormArray', this.contactFormArray);
      return this.contactFormArray = {};
    }
    
  }

}
