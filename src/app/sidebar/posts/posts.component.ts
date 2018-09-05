import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  dataUrl:string = "assets/data/postsData.json";
  postsData;
  firstRowStatus:boolean = true;
  secRowStatus:boolean = false;
  firstRowData;
  secRowData;
  widgetStatus;

  constructor(private _postsService:ApiService) {}

  ngOnInit() {
    this.widgetStatus = false;
    this.getPostsData();
  }

  getPostsData(){
    this._postsService.getData(this.dataUrl).subscribe(
      data => { 
        this.postsData = data;
        this.setPostsData(this.postsData);
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }

  setPostStatus(firstRowStatus,secRowStatus):void{
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

  setPostsData(postsData):boolean{
    this.postsData = postsData;
    this.firstRowData = this.postsData[0];
    this.secRowData = this.postsData[1];
    return this.widgetStatus = true;
  }
}
