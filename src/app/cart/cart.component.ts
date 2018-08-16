import { Component, EventEmitter , Output  } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';
import { CartCommon } from '../shared/CartCommon';
import { LocalStorageService } from '../shared/services/local-storage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent extends CartCommon{
  
  @Output() valueChange = new EventEmitter();
  clearCartArray:boolean = false;

  constructor( private _dataShareService: DataShareService, private _localstorageService : LocalStorageService ) { 
    super();
    this._dataShareService.shareDataSubject.subscribe(receivedData=>{
      this.cartProdArray = receivedData;
      this.cartLength =  this.cartProdArray.length;
      this.doCartTotal ();
      return this.data = {
        "products" : receivedData,
        "totalCart" : this.cartTotal
      };
    });
  }
  
  clearCart(cartProdArray):void{
    this.cartProdArray = cartProdArray;
    this.bestDealVisibility = false;
    this.cartProdArray = [];
    this.cartTotal = 0;
    this.valueChanged();
  }
 
  valueChanged() { 
    this.clearCartArray = true;
    this._localstorageService.setLocalstorage(1,"cartCleared");
    this.valueChange.emit(this.clearCartArray);
  }
}
