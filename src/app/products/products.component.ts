import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { DataToCart } from '../shared/class/data-to-cart';
import { Modal } from '../shared/class/modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  page:string;
  books;
  cart:any[];
  cartLength:number;
  modalVisibility;
  emittedItem:any[];
  modalItem:object;
  localData:string;
  
  constructor(
    private _bookService:ApiService, 
    private _dataShareService:DataShareService,
    private _localstorageService:LocalStorageService,
  ) {}

  ngOnInit() {
    this.page  = "shop";
    this.localData = "cartCleared";
    this.cartLength = 0
    this.modalItem = new Object;
    this.cart = [];
    this.getData();
  }

  getData():void{
    this._bookService.getBooks().subscribe(
      data => { this.books = data},
      err => console.error(err),
      () => console.log('done loading books')
    );
  }

  addToCart(i):void{
    var bookToCart = new DataToCart().setData(this.books,i);
    var cartDataStatus = this._localstorageService.getLocalstorage(this.books,this.localData);
    if(cartDataStatus === 1){
      this.cart = [];
      localStorage.setItem(this.localData,"0");//Todo : local storage service 
      this.cart.push(bookToCart);
    }else{
      this.cart = this.cart;
      this.cart.push(bookToCart);
    }
    this.passData(this.cart);
  }

  passData(cart):void{
    this.cart = cart;
    this._dataShareService.sendDataToOtherComponent(this.cart);
  }

  openModal(i):void{
    var array:Modal = new Modal().setBookModal(this.books,i);
    this.modalItem = array;
    this.modalVisibility = true;
  }
  
  closeModal():void{
    this.modalItem = {};
    this.modalVisibility = false;
  }
   
}
