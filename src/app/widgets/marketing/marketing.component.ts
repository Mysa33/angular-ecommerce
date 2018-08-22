import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  @Input() parentId;
  widgetStyleId:number;
  iconColor:string;
  numberColor:string;
  txtColor:string;

  constructor() {}

  ngOnInit() {
    this.setWidgetStyle(this.parentId);
  }

  setWidgetStyle(parentId):void{
    this.widgetStyleId = parentId;
    
    if(this.widgetStyleId === 0 || 1){
      this.iconColor="#333";
      this.numberColor = "#e40046";
      this.txtColor = "#333";
    }else{
      this.iconColor="#e40046";
      this.numberColor = "#333";
      this.txtColor = "#e40046";
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
      "text":"Clients satisfaits"
    }
  ];
}
