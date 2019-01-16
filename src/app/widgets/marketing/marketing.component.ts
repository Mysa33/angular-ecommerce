import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marketing',
  template:`
  <div class="container ecom-marketing-container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" *ngFor="let item of  marketingArray; let i = index">
        <div class="ecom-marketing-item-prop"><i class="material-icons" [ngStyle]="{'color':iconColor}">{{item.icon}}</i></div>
        <div class="ecom-marketing-item-prop ecom-marketing-item-number" [ngStyle]="{'color':numberColor }">{{item.number}}</div>
        <div class="ecom-marketing-item-prop ecom-marketing-item-txt" [ngStyle]="{'color':txtColor }">{{item.text}}</div>
      </div>
    </div>
  </div>
  `,
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
