import { Component, EventEmitter , Output  } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';
import { CartCommon } from '../shared/CartCommon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent extends CartCommon{
  
  @Output() valueChange = new EventEmitter();
  clearCartArray:boolean = false;

  constructor( private _dataShareService: DataShareService ) { 
    super();
    this._dataShareService.shareDataSubject.subscribe(receivedData=>{
      this.cartProdArray = receivedData;
      this.cartLength =  this.cartProdArray.length;
      // doCartTotal ()
      this.doCartTotal ();
      return this.data = {
        "products" : receivedData,
        "totalCart" : this.cartTotal
      };
    });
  }
  
  //clearCart()
  clearCart(cartProdArray):void{
    this.cartProdArray = cartProdArray;
    this.bestDealVisibility = false;
    this.cartProdArray = [];
    this.cartTotal = 0;
    this.valueChanged();
  }
  //valueChanged()
  valueChanged() { 
    this.clearCartArray = true;
    localStorage.setItem("cartCleared", "1" );
    this.valueChange.emit(this.clearCartArray);
  }
}
