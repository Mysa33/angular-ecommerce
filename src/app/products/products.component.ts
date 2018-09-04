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
  booksCart:any[];
  booksCartLength:number;
  modalVisibility;
  bookModalObj:any[];
  bookModal;
  localData:string;
  
  constructor(
    private _bookService:ApiService, 
    private _dataShareService:DataShareService,
    private _localstorageService:LocalStorageService,
  ) {}

  ngOnInit() {
    this.page  = "shop";
    this.localData = "cartCleared";
    this.booksCartLength = 0
    this.bookModal = {};
    this.booksCart = [];
    this.getProductsData();
  }

  getProductsData():void{
    this._bookService.getBooks().subscribe(
      data => { this.books = data},
      err => console.error(err),
      () => console.log('done loading books')
    );
  }

  addToCart(i):void{
    const bookToCart = new DataToCart().setData(this.books,i);
    let cartDataStatus = this._localstorageService.getLocalstorage(this.books,this.localData);
    if(cartDataStatus === 1){
      this.booksCart = [];
      localStorage.setItem(this.localData,"0");//Todo : local storage service 
      this.booksCart.push(bookToCart);
    }else{
      this.booksCart = this.booksCart;
      this.booksCart.push(bookToCart);
    }
    this.passData(this.booksCart);
  }

  passData(booksCart):void{
    this.booksCart = booksCart;
    this._dataShareService.sendDataToOtherComponent(this.booksCart);
  }

  openModal(i):void{
    let array = new Modal().setBookModal(this.books,i);
    this.bookModal = array;
    this.modalVisibility = true;
  }
  
  closeModal():void{
    this.bookModal = {};
    this.modalVisibility = false;
  }
   
}
