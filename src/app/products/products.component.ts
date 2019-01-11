import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { DataToCart } from '../shared/class/data-to-cart';
import { Modal } from '../shared/class/modal';

@Component({
  selector: 'app-products',
  template:`
  <!-- breadcrumb -->
  <app-breadcrumb [pageName]="page"></app-breadcrumb>
  <!-- breadcrumb -->
  <div class="container">

    <!-- .row -->
    <div class="row ecom-home-catalog-serach-row">
      <div class="col-lg-4 col-lg-offset-8">
        <div class="input-group mb-3">    
          <input type="search" class="form-control" [(ngModel)]="queryString" placeholder ="Rechercher par titre">
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="material-icons">search</i>
            </span>
          </div>
        </div>
      </div>
      <!-- /.row -->

    <!-- .ecom-home-catalog-row -->
    <div class="row ecom-home-catalog-row">
      <!-- col-lg-4-->
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6" *ngFor="let book of  books | filterdata: queryString : 'title'; let i = index">
        <!-- .ecom-home-catalog-card -->
        <div class="card ecom-home-catalog-card">
            <figure>
              <img class="card-img-top" src="{{book.cover}}" alt="{{book.title}}">
              <figcaption>
                  <button type="button" class="btn" id="{{i}}" (click)="openModal(i);">
                    Lire plus 
                  </button>
              </figcaption>
            </figure>
            <div class="card-body">
              <h5 class="card-title ecom-home-catalog-book-title">{{book.title}}</h5>
              <p class="card-text ecom-home-catalog-book-price">
                <span>{{book.price}}</span>
                <span>&euro;</span>
              </p>
              <a class="btn btn-primary ecom-home-catalog-add-cart" id="{{i}}" (click)="addToCart(i);">
                <span class="ecom-responsive">Ajouter au panier</span>
                <span class="ecom-home-add-to-cart-icon">
                    <i class="material-icons">add_shopping_cart</i>
                </span>
              </a><!-- todo a verifier -->
            </div>
        </div>
        <!-- /.ecom-home-catalog-card -->
      </div>
    </div>
    <!-- .ecom-home-catalog-row -->
  </div>
  
  <!-- modal -->
  <div class="ecom-modal-container" *ngIf="modalVisibility">
    <!-- .modal -->
    <div class="ecom-modal modal-body" >
      <!-- .row -->
      <div class="row ecom-modal-content"> 
        <!-- app-modal-body -->
        <app-modal [bookModalObjChild]="modalItem"></app-modal>
        <!-- app-modal-body -->
        <div class="col-lg-12">
          <div class="modal-footer">
            <button (click)="closeModal();" type="button" class="btn btn-secondary ecom-modal-close">Fermer</button>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.modal -->
  </div>
  <!-- /modal -->  
  `,
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {
  
  page:string;
  books;
  cart:any[];
  cartLength:number;
  modalVisibility:boolean;
  emittedItem:any[];
  modalItem:object;
  storageName:string;
  
  constructor(
    private _bookService:ApiService, 
    private _dataShareService:DataShareService,
    private _localStorageService:LocalStorageService,
  ) {}

  ngOnInit() {
    this.page  = "shop";
    this.cartLength = 0
    this.modalItem = new Object;
    this.cart = [];
    this.storageName = "cartStatus";
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
    var cartStatus = this._localStorageService.getLocalstorage(this.books, this.storageName);
    //Check if cart is cleared
    if(cartStatus === 1){
      //use toString method
      this.cart = [];
      localStorage.setItem(this.storageName,"0");//Todo : local storage service 
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
    var array:Modal = new Modal().setItem(this.books,i);
    this.modalItem = array;
    this.modalVisibility = true;
  }
  
  closeModal():void{
    this.modalItem = {};
    this.modalVisibility = false;
  }
   
}
