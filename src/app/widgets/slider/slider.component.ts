import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-slider',
  template:`
  <div class="container ecom-slider-container" *ngIf="widgetStatus">
    <!-- .row -->
    <div class="ecom-slider-row" *ngIf ="slideSecRow">
      <div class="ecom-slider-second-title">
        <h4>{{firstSlide.main}}</h4>
      </div>
      <div class="ecom-slider-main-title">
        <h2>{{firstSlide.title}}</h2>
        <span>jusqu'au {{firstSlide.date}}</span>
      </div>
      <div class="ecom-slider-btn-cont">
        <a class="btn ecom-home-featured-add-cart" routerLink="/shop">
          <span>Shop now !</span>
          <span class="ecom-home-add-to-cart-icon">
            <i class="material-icons">shop</i>
          </span>
        </a>
      </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="ecom-slider-row-sec" *ngIf ="slideFirstRow">
      <div class="ecom-slider-second-title">
        <h4>{{secSlide.main}}</h4>
      </div>
      <div class="ecom-slider-main-title">
        <h2>{{secSlide.title}}</h2>
        <span>jusqu'au {{secSlide.date}}</span>
      </div>
      <div class="ecom-slider-btn-cont">
        <a class="btn ecom-home-featured-add-cart" routerLink="/shop">
          <span>Shop now !</span>
          <span class="ecom-home-add-to-cart-icon">
            <i class="material-icons">shop</i>
          </span>
        </a>
      </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="ecom-slider-nav-wrapper">
      <div class="ecom-slider-btn">
        <div class="ecom-slider-btn-wrapper ecom-slider-btn-left" (click)="setWidgetStatus(slideFirstRow,slideSectRow);">
          <i class="material-icons">keyboard_arrow_left</i>
        </div>  
        <div class="ecom-slider-btn-wrapper ecom-slider-btn-right" (click)="setWidgetStatus(slideFirstRow,slideSectRow);">
          <i class="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  `,
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  
  widgetStatus:boolean;
  dataUrl;
  firstSlide;
  secSlide;
  sliderData;
  slideFirstRow:boolean;
  slideSecRow:boolean;

  constructor(private _sliderService:ApiService) {
    this.dataUrl = "assets/data/sliderData.json";
  }

  ngOnInit() {
    this.widgetStatus = false;
    this.slideFirstRow = true;
    this.slideSecRow = false;
    this.getSliderData();
    this.setWidgetStatus(this.slideFirstRow, this.slideSecRow);
  }

  getSliderData(){
    this._sliderService.getData(this.dataUrl).subscribe(
      data => { 
        this.sliderData = data;
        this.setSliderData(this.sliderData);
      },
      err => console.error(err),
      () => console.log('done loading slides')
    );
  }

  setSliderData(sliderData):boolean{
    this.sliderData = sliderData;
    this.firstSlide = this.sliderData[0];
    this.secSlide = this.sliderData[1];
    return this.widgetStatus = true;
  }
  
  setWidgetStatus(slideFirstRow,slideSectRow){
    this.slideFirstRow = slideFirstRow;
    this.slideSecRow = slideSectRow;
    if(this.slideFirstRow == true){
      this.slideFirstRow = false;
      this.slideSecRow = true;
    }else{
      this.slideFirstRow = true;
      this.slideSecRow = false;
    }
  }

}
