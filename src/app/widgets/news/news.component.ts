import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';
import { Slide } from '../../shared/slide';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  widgetStatus:boolean;
  dataUrl:string;
  newsData;
  firstRowData;
  secRowData;
  firstRowStatus:boolean;
  secRowStatus:boolean;

  constructor(private _newsService:ApiService) { }

  ngOnInit() {
    this.widgetStatus = false;
    this.dataUrl = "http://localhost:4200/assets/data/newsData.json";
    this.firstRowStatus = true;
    this.secRowStatus = false;
    this.getPostsData(this.widgetStatus);
  }

  getPostsData(widgetStatus){
    this.widgetStatus = widgetStatus;
    this._newsService.getData(this.dataUrl).subscribe(
      data => { 
        this.newsData = data;
        this.firstRowData = new Slide().setFirstRow(this.newsData,this.firstRowData);
        this.secRowData = new Slide().setSecondRow(this.newsData,this.secRowData);
        this.resolveAfterdelay(this.widgetStatus,this.newsData);
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

  resolveAfterdelay(widgetStatus,newsData):any {
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

  setRowStatus(firstRowStatus,secRowStatus){
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
