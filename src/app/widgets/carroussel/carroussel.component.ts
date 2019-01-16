import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';
@Component({
  selector: 'app-carroussel',
  template:`
  <h6 class="ecom-slider-title">Produits à la une :</h6>
  <div class="ecom-slider">  
    <div class="ecom-slider-wrapper" routerLink="/shop">
      <figure class="ecom-slider-item" *ngFor="let product of carousselData">
        <img src="{{product.cover}}" alt="{{product.title}}">
        <h6>{{product.price}} &euro;</h6>
      </figure>  
    </div>
  </div>
  `,
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
