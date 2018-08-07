import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsletterFormArray;
  
  constructor() {}

  ngOnInit() {}
  
  newsletterForm = new FormGroup({
    inputNewsletter: new FormControl('',[Validators.required])
  });
  onSubmit(newsletterFormArray):any { 
    if(!this.newsletterForm.value){
      alert("le champs est vide.");
      return;
    }else{
      this.newsletterFormArray = newsletterFormArray;
      const insDate:Date = new Date();
      let flag:boolean = true;
      this.newsletterFormArray = {
        "email" : this.newsletterForm.value,
        "insDate" : insDate,
        "flag" : flag
      };
      this.newsletterFormArray = JSON.stringify(this.newsletterFormArray);
      console.log("newsletterFormArray : ",this.newsletterFormArray);
      localStorage.setItem('newsletterFormArray', this.newsletterFormArray);
      return this.newsletterFormArray = {};
    }
    
  }
}
