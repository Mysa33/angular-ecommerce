import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';
import { Slide } from '../../shared/class/slide';

@Component({
  selector: 'app-news',
  template:`
  <div class="ecom-news-wrapper" *ngIf="widgetStatus">
    <div class="ecom-news-nav-wrapper">
      <div (click)="setRowStatus(firstRowStatus,secRowStatus);">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>
      <div (click)="setRowStatus(firstRowStatus,secRowStatus);">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
    <!-- .row -->
    <div class="row" *ngIf="firstRowStatus">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" *ngFor="let item of firstRowData;let i = index">
        <div class="ecom-news-item-wrapper">
          <div>      
            <figure>
              <img src="{{item.img}}" alt="{{item.title}}">
              <figcaption>
                <i class="material-icons" routerLink="/blog">
                  zoom_in
                </i>
              </figcaption> 
            </figure>
            <span class="ecom-news-title">{{item.title}}</span>
            <br>
            <span class="ecom-news-date"><strong>Publié le : </strong> {{item.date}}</span>  
          </div>
          <p>
            {{item.txt}} 
          </p>
        </div>
      </div>
    </div>
    <!-- /.row -->
    <!-- .row -->
    <div class="row" *ngIf="secRowStatus">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" *ngFor="let item of secRowData;let i = index">
        <div class="ecom-news-item-wrapper">
          <div>      
            <figure>
              <img src="{{item.img}}" alt="{{item.title}}">
              <figcaption>
                <i class="material-icons" routerLink="/blog">
                  zoom_in
                </i>
              </figcaption>
              
            </figure>
            <span class="ecom-news-title">{{item.title}}</span>
            <br>
            <span class="ecom-news-date"><strong>Publié le : </strong> {{item.date}}</span>  
          </div>
          <p>
            {{item.txt}} 
          </p>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  widgetStatus:boolean;
  dataUrl:string;
  newsData:object;
  firstRowData;
  secRowData;
  firstRowStatus:boolean;
  secRowStatus:boolean;
  flag:number;

  constructor(private _newsService:ApiService) { }

  ngOnInit() {
    this.widgetStatus = false;
    this.dataUrl = "assets/data/newsData.json";
    this.firstRowStatus = true;
    this.secRowStatus = false;
    this.flag = 3;
    this.getPostsData(this.widgetStatus);
  }

  getPostsData(widgetStatus){
    this.widgetStatus = widgetStatus;
    this._newsService.getData(this.dataUrl).subscribe(
      data => { 
        this.newsData = data;
        this.firstRowData = new Slide().setFirstRow(this.newsData,this.firstRowData,this.flag);
        this.secRowData = new Slide().setSecondRow(this.newsData,this.secRowData,this.flag);
        this.resolveAfterdelay(this.widgetStatus,this.newsData);
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

  resolveAfterdelay(widgetStatus:boolean,newsData:object):any {
    this.widgetStatus = widgetStatus;
    this.newsData = newsData;
    return new Promise(resolve => {
      setTimeout(() => {
        this.widgetStatus = true;
        resolve('resolved');
      }, 
      500);
    });
  }

  setRowStatus(firstRowStatus:boolean,secRowStatus:boolean){

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
