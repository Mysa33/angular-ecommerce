import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  
  widgetTeamId:number;
  page:string;

  constructor() { }

  ngOnInit() {
    this.widgetTeamId = 2;
    this.page = "Contact";
  }

  

}
