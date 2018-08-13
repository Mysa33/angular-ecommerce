import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  
  featured;
  sliderSecRow;
  sliderFirstRow;
  firstRowStatus:boolean = false;
  secRowStatus:boolean = false;

  constructor(private _featuredService: ApiService) { }

  ngOnInit() {
    this.getFeaturedsData(this.firstRowStatus, this.secRowStatus);
  }

  getFeaturedsData(firstRowStatus,secRowStatus):void{
    this._featuredService.getBooks().subscribe(
      data => { 
        this.featured = data;
        this.sliderSecRow = this.featured.slice(4);
        this.sliderFirstRow = this.featured.splice(3,4);
        this.firstRowStatus = !firstRowStatus;
        this.secRowStatus = secRowStatus;
      },
      err => console.error(err),
      () => {console.log('done loading featureds');}
    );
  }
  setWidgetStatus(firstRowStatus,secRowStatus){
    this.firstRowStatus = firstRowStatus;
    this.secRowStatus = secRowStatus;
    console.log("firstRowStatus : ",this.firstRowStatus);
    console.log("secRowStatus : ",this.secRowStatus);
    if(this.firstRowStatus == true){
      this.firstRowStatus = false;
      this.secRowStatus = true;
    }else{
      this.firstRowStatus = true;
      this.secRowStatus = false;
    }
  }
}
