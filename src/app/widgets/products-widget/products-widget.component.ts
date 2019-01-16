import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-products-widget',
  template:`
  <div class="row ecom-prod-widget-row">
    <div class="col-lg-12">
      <h6>Nos produits :</h6>
      <!-- .list-group -->
      <ul class="list-group">
          <li class="list-group-item" *ngFor="let product of  booksWidget; let i = index" routerLink="/shop">
            <div class="row">
              <div class="col-sm-3">
                <img class="rounded" src="{{product.cover}}" alt="{{product.title}}">
              </div>
              <div class="col-sm-6 ecom-prod-widget-title">
                <span>{{product.title}}</span>
              </div>
              <div class="col-sm-3 ecom-prod-widget-price">
                <span>{{product.price}} &euro;</span>
              </div>
            </div>
          </li>
      </ul>
      <!-- /.list-group -->
    </div>
  </div>
  `,
  styleUrls: ['./products-widget.component.scss']
})
export class ProductsWidgetComponent implements OnInit {
  
  booksWidget:any;

  constructor(private _bookService: ApiService) {}
  
  ngOnInit() {
    this.getProductsData();
  }

  getProductsData():void{
    this._bookService.getBooks().subscribe(
      data => { 
        this.booksWidget = data;
        this.booksWidget = this.booksWidget.slice(5);
      },
      err => console.error(err),
      () => console.log('done loading books into widget')
    );
  }
}
