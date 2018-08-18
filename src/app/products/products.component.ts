import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  page:string = "shop";
  books;
  booksCart  = [];
  booksCartLength :number = 0;
  modalVisibility;
  bookModalObj = [];
  bookModal = {};
  
  constructor(private _bookService:ApiService, private _dataShareService:DataShareService) {}

  ngOnInit() {
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
    const bookToCart = {
       "isbn" : this.books[i].isbn,
       "title": this.books[i].title,
       "price": this.books[i].price,
       "cover": this.books[i].cover
    };
    const cartDataStatus = localStorage.getItem("cartCleared"); 
    if(cartDataStatus === "1"){
      this.booksCart = [];
      localStorage.setItem("cartCleared", "0" );
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
    this.bookModal = {
      "isbn" : this.books[i].isbn,
       "title": this.books[i].title,
       "price": this.books[i].price,
       "cover": this.books[i].cover,
       "synopsis":this.books[i].synopsis[0]
    }
    this.modalVisibility = true;
  }

  closeModal():void{
    this.bookModal = {};
    this.modalVisibility = false;
  }
}
