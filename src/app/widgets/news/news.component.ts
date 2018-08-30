import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  widgetStatus:boolean;
  dataUrl:string;
  newsData;
  newsArray;
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
}
