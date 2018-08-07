import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';

@Component({
  selector: 'app-products-widget',
  templateUrl: './products-widget.component.html',
  styleUrls: ['./products-widget.component.scss']
})
export class ProductsWidgetComponent implements OnInit {
  
  booksWidget;
  
  constructor(private _bookService: ApiService) { }
  
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
