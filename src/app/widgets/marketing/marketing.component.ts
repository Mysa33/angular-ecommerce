import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  @Input() parentId;
  widgetStyleId:number;

  constructor() {}

  ngOnInit() {}

  setWidgetStyle(parentId):void{
    this.widgetStyleId = parentId;
    let iconColor:string;
    let numberColor:string;
    let txtColor:string;
    if(this.widgetStyleId === 0 || 1){
      iconColor="#333";
      numberColor = "#e40046";
      txtColor = "#333";
    }else{
      iconColor="#e40046";
      numberColor = "#333";
      txtColor = "#e40046";
    }

  }
  marketingArray = [
    {
    "icon":"shopping_cart",
    "number":186,
    "text":"Commandes par jour"
    },
    {
      "icon":"local_shipping",
      "number":2493,
      "text":"Colis livrés"
    },
    {
      "icon":"thumb_up_alt",
      "number":560,
      "text":"Commentaires positifs"
    },
    {
      "icon":"sentiment_very_satisfied",
      "number":"100%",
      "text":"Commentaires positifs"
    }
  ];



}
