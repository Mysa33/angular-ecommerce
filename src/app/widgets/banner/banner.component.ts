import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template:`
  <div class="container ecom-slider-container">
    <!-- .row -->
    <div class="row ecom-slider-row" *ngIf ="slideSectRow">

      <div class="ecom-slider-second-title">
        <h4>Nos offres du moment</h4>
      </div>
      <div class="ecom-slider-main-title">
        <h2>Ut gravida tristique semper !</h2>
        <span>jusqu'au 27/08/2018</span>
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
    <div class="row ecom-slider-row-sec" *ngIf ="slideFirstRow">

      <div class="ecom-slider-second-title">
        <h4>Spécial été</h4>
      </div>
      <div class="ecom-slider-main-title">
        <h2>elit sapien aliquam !</h2>
        <span>jusqu'au 01/09/2018</span>
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
    <div class="row ecom-slider-nav-wrapper">
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
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  slideFirstRow:boolean = true;
  slideSectRow:boolean = false;
  constructor() { }

  ngOnInit() {
    this.setWidgetStatus(this.slideFirstRow, this.slideSectRow);
  }

  setWidgetStatus(slideFirstRow,slideSectRow){
    this.slideFirstRow = slideFirstRow;
    this.slideSectRow = slideSectRow;
    if(this.slideFirstRow == true){
      this.slideFirstRow = false;
      this.slideSectRow = true;
    }else{
      this.slideFirstRow = true;
      this.slideSectRow = false;
    }
  }
}
