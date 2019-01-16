import { Component, EventEmitter , Output  } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  
  @Output() valueChange = new EventEmitter();
  clearCartArray:boolean = false;
  data:any;
  cartProdArray:any[];
  cartLength:number;
  cartTotal:number;
  bestDealVisibility:boolean = false;

  constructor( 
    private _dataShareService: DataShareService, 
    private _localstorageService : LocalStorageService 
  ) { 

    this._dataShareService.shareDataSubject.subscribe(receivedData=>{
      this.cartProdArray = receivedData;
      this.cartLength =  this.cartProdArray.length;
      this.doTotal();
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
  
  valueChanged():void { 
    
    this.clearCartArray = true;
    this._localstorageService.setLocalstorage(1,"cartCleared");
    this.valueChange.emit(this.clearCartArray);

  }

  doTotal():number{

    if(!this.cartLength){
    this.cartTotal = 0;
    }else{
      const add = (a:number, b:number) => a + b;
      let booksArray:Array<any> = this.cartProdArray.sort();
      let itemPriceArray:Array<any> = [];
      for (let k in booksArray){
        itemPriceArray.push(Number(booksArray[k].price));
      }
      this.cartTotal = itemPriceArray.reduce(add);
    }  
    return this.cartTotal;
  }

  displayBestDeal():boolean{
    return this.bestDealVisibility = true; 
  }

}
