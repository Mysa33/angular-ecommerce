import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Json } from '../../shared/class/json';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterFormArray;
  newsletterArray:string = "newsletterFormArray"
  
  constructor(private _newsletterService:LocalStorageService) {}

  ngOnInit() {}
  
  newsletterForm = new FormGroup({
    inputNewsletter: new FormControl('',[Validators.required])
  });
  
  onSubmit(newsletterFormArray):any { 
    if(this.newsletterForm.value.length === 0){
      alert("le champs est vide.");
      return;
    }else{
      this.newsletterFormArray = newsletterFormArray;
      this.newsletterArray = this.newsletterArray;
      let insDate:any = new Date();
      insDate = insDate.getDate() + "/" + insDate.getMonth() + "/" +insDate.getFullYear();
      let flag:boolean = true;
      this.newsletterFormArray = {
        "email" : this.newsletterForm.value,
        "insDate" : insDate,
        "flag" : flag
      };
      this._newsletterService.setLocalstorage(this.newsletterFormArray,this.newsletterArray);
      this.newsletterForm.reset();
      return this.newsletterFormArray = {};
    }
    
  }
}
