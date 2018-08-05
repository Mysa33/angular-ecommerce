import { Component, EventEmitter, Output } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
  catLength:number = 0;
  cartData:any[] = [];
  isVisible:boolean = false;
  
  constructor( private _dataShareService: DataShareService) { 
    this._dataShareService.shareDataSubject.subscribe(receiveddata=>{
      this.cartData = receiveddata;
      this.catLength =  this.cartData.length;
    });
  }
  // cartToggle
  cartToggle():void{
    this.catLength = this.cartData.length;
    if(this.catLength !== 0){
      this.isVisible = !this.isVisible;
    }else{
      this.isVisible = this.isVisible;
    }
  }
}
