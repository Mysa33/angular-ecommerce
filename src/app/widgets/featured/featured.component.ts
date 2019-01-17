import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';
import { Slide } from '../../shared/class/slide';

@Component({
  selector: 'app-featured',
  template:`
  <!-- .container -->
  <div class="container ecom-featured-container">
    <div class="row">
      <div class="col-lg-10 ecom-featured-title">
        <h4>Top produits : </h4>
      </div>
      <div class="ecom-featured-nav-wrapper">
        <div (click)="setWidgetStatus(firstRowStatus,secRowStatus);">
          <i class="material-icons">keyboard_arrow_left</i>
        </div>
        <div (click)="setWidgetStatus(firstRowStatus,secRowStatus);">
          <i class="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
    <!-- .ecom-home-featured-row -->
    <div class="row ecom-home-featured-row" *ngIf ="firstRowStatus">
      <!-- .col-lg-3-->
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6" *ngFor="let item of sliderFirstRow; let i = index">
        <!-- .ecom-home-featured-card -->
        <div class="card ecom-home-featured-card">
          <figure>
            <img class="card-img-top" src="{{item.cover}}" alt="{{item.title}}">
            <figcaption>
              <i class="material-icons" routerLink="/shop">
                zoom_in
              </i>
            </figcaption>
          </figure>
          <!-- .card-body ;-->
          <div class="card-body">
            <h5 class="card-title ecom-home-featured-book-title">{{item.title}}</h5>
            <p class="card-text ecom-home-featured-book-price">
              <span>{{item.price}}</span>
              <span>&euro;</span>
            </p>
            <a class="btn btn-primary ecom-home-featured-add-cart" id="i" routerLink="/shop">
              <span class="ecom-responsive">Shop now !</span>
              <span class="ecom-home-add-to-cart-icon">
                <i class="material-icons">shop</i>
              </span>
            </a><!-- todo verifier -->
          </div>
          <!-- /.card-body -->
        </div>
        <!-- .ecom-home-featured-card -->
      </div>  
      <!-- /.col-lg-3-->
    </div>
    <!-- /.ecom-home-featured-row -->  
    <div class="row ecom-home-featured-row" *ngIf ="secRowStatus">
      <!-- .col-lg-3-->
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6" *ngFor="let item of sliderSecRow; let j = index">
          <!-- .ecom-home-featured-card -->
          <div class="card ecom-home-featured-card">
            <figure>
              <img class="card-img-top" src="{{item.cover}}" alt="{{item.title}}">
              <figcaption>
                <i class="material-icons" routerLink="/shop">
                  zoom_in
                </i>
              </figcaption>
            </figure>
            <!-- .card-body -->
            <div class="card-body">
              <h5 class="card-title ecom-home-featured-book-title">{{item.title}}</h5>
              <p class="card-text ecom-home-featured-book-price">
                <span>{{item.price}}</span>
                <span>&euro;</span>
              </p>
              <a class="btn btn-primary ecom-home-featured-add-cart" id="j" routerLink="/shop">
                <span class="ecom-responsive">Shop now !</span>
                <span class="ecom-home-add-to-cart-icon">
                    <i class="material-icons">shop</i>
                </span>
              </a>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- .ecom-home-featured-card -->
        </div>  
        <!-- /.col-lg-3-->
    </div>

  </div>
  <!-- /.container -->
  `,
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  
  featured;
  sliderSecRow;
  sliderFirstRow;
  firstRowStatus:boolean;
  secRowStatus:boolean;
  flag:number;

  constructor(private _featuredService: ApiService) { }

  ngOnInit() {
    this.firstRowStatus = false;
    this.secRowStatus = false;
    this.flag = 4;
    this.getFeaturedsData(this.firstRowStatus, this.secRowStatus);
  }

  getFeaturedsData(firstRowStatus, secRowStatus):void{
    this._featuredService.getBooks().subscribe(
      data => { 
        this.featured = data;
        this.sliderFirstRow = new Slide().setFirstRow(this.featured, this.sliderFirstRow, this.flag);
        this.sliderSecRow = new Slide().setSecondRow(this.featured, this.sliderSecRow, this.flag);
        this.firstRowStatus = !firstRowStatus;
        this.secRowStatus = secRowStatus;
      },
      err => console.error(err),
      () => {console.log('done loading featured');}
    );
  }

  setWidgetStatus(firstRowStatus, secRowStatus){
    this.firstRowStatus = firstRowStatus;
    this.secRowStatus = secRowStatus;
    if(this.firstRowStatus == true){
      this.firstRowStatus = false;
      this.secRowStatus = true;
    }else{
      this.firstRowStatus = true;
      this.secRowStatus = false;
    }
  }
}
