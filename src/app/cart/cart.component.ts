import { Component } from '@angular/core';

import { DataShareService } from '../shared/services/data-share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent{
  data;
  cartProdArray:any[];
  cartLength:number;
  cartTotal:number;
  bestDealVisibility:boolean = false;
  
  constructor( private _dataShareService: DataShareService ) { 
    this._dataShareService.shareDataSubject.subscribe(receivedData=>{
      this.cartProdArray = receivedData;
      this.cartLength =  this.cartProdArray.length;
      this.doCartTotal ();//calc total when adding item even when cart is opned. 
      return this.data = {
        "products" : receivedData,
        "totalCart" : this.cartTotal
      };
    });
  }

  // Calc total
  doCartTotal():number{
    if(!this.cartLength){
      this.cartTotal = 0;
    }else{
      const add = (a:number, b:number) => a + b;
      let booksArray:Array<any> = this.cartProdArray.sort();
      let itemPriceArray:Array<any> = [];
      for (let _k in booksArray){
        itemPriceArray.push(Number(booksArray[_k].price));
      }
      this.cartTotal = itemPriceArray.reduce(add);
    }  
    return this.cartTotal;
  }
  // Clear cart
  clearCart(cartProdArray):void{
    this.cartProdArray = cartProdArray;
    this.bestDealVisibility = false;
    this.cartProdArray = [];
    this.cartTotal = 0;
    //this.isVisible = false; //Todo input from header and event emitter from cart to header.
  }
  //Display bestDeal
  displayBestDeal(){
    this.bestDealVisibility = true; 
  }
  
}
