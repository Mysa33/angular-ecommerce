import { Component } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';
import { Toggle } from '../shared/toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  clearReceivedData:boolean = false;
  catLength:number = 0;
  cartData:any[] = [];
  isVisible:boolean = false;
  mobileNavVis:boolean = false;
  
  
  constructor( private _dataShareService: DataShareService) { 
    this._dataShareService.shareDataSubject.subscribe(receiveddata=>{
      this.cartData = receiveddata;
      this.catLength =  this.cartData.length;
    });
  }

  //mobileNavToggle()
  mobileNavToggle():boolean{
    let widgetStatus:boolean = new Toggle(this.mobileNavVis).simpleToggle(this.mobileNavVis);
    return this.mobileNavVis = widgetStatus;
  }
  //cartToggle()
  cartToggle():void{
    this.catLength = this.cartData.length;
    if(this.catLength !== 0){
      let widgetStatus:boolean = new Toggle(this.isVisible).simpleToggle(this.isVisible);
      this.isVisible = widgetStatus;
    }else{
      this.isVisible = this.isVisible;
    }
  }
  //cartStatus() 
  cartStatus(status) { //Event from Cart component (child) emitted by clearCart()
    if(status == false){
      return;
    }else{
      this.isVisible = false;
      this.cartData = [];
      this.catLength = 0;
    }
  }

}
