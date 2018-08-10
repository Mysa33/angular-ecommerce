import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';
@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss']
})
export class CarrousselComponent implements OnInit {
  carousselData;
  constructor(private _productsService: ApiService) { }

  ngOnInit() {
    this.getProductsData();
  }
  getProductsData():void{
    this._productsService.getBooks().subscribe(
      data => { 
        this.carousselData = data; 
      },
      err => console.error(err),
      () => console.log('done loading books into caroussel')
    );
  }
}
