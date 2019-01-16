import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-contact-form',
  template:`
  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail">Email *</label>
        <input type="email" class="form-control" name="inputEmail" formControlName="inputEmail" placeholder="Email" required="required">
      </div>
      <div class="form-group col-md-6">
        <label for="inputName">Nom *</label>
        <input type="text" class="form-control" name="inputName" formControlName="inputName" placeholder="Nom" required="required">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Adresse</label>
      <input type="text" class="form-control" name="inputAddress" formControlName="inputAddress" placeholder="Votre adresse">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Complément d'adresse</label>
      <input type="text" class="form-control" name="inputAddress2" formControlName="inputAddress2" placeholder="Appartement, studio, ou étage">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">Ville</label>
        <input type="text" class="form-control" name="inputCity" formControlName="inputCity" placeholder="Votre ville">
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Code postal</label>
        <input type="text" class="form-control" name="inputZip" formControlName="inputZip" placeholder = "75008">
      </div>
      
      <div class="form-group col-md-12">
        <div class="form-group col-md-5 ecom-title-wrapper">
          <label for="inputZip">Titre</label>
            <input type="text" class="form-control" name="inputTitle" formControlName="inputTitle" placeholder = "Titre">
        </div>
        <label for="inputTxt">Votre message *</label>
        <textarea rows="10" class="form-control" name="inputTxt" formControlName="inputTxt" placeholder="Votre message" required="required">
        </textarea>
      </div>
    </div>
    
    <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">Envoyer</button>
    
  </form>
  `,
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
    inputEmail: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    inputName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    inputAddress: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    inputZip: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
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
      this.contactForm.reset();
    }   
  }

  getContactData(storedData,arrayName):any{ //Config Messages data
    this.storedData= storedData;
    this.arrayName = arrayName;
    this.storedData = this._profilService.getLocalstorage(this.storedData,this.arrayName);
    if(this.storedData === null){
      this.storedData = [];
    }
    return this.storedData;
  }
}
