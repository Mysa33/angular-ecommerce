import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
import { Slide } from '../shared/class/slide';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  widgetStatus:boolean;
  dataUrl:string;
  newsData;
  firstRowData;
  secRowData;
  firstRowStatus:boolean;
  secRowStatus:boolean;
  flag:number;
  page:string;

  constructor(private _newsService:ApiService) { }

  ngOnInit() {
    this.page = "blog";
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
      this.firstRowStatus = true;
      this.secRowStatus = true;
    }else{
      this.firstRowStatus = true;
      this.secRowStatus = true;
    }
  }

}
