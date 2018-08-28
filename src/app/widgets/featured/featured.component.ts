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
        this.sliderFirstRow = this.featured.slice(3);
        this.sliderSecRow = this.featured.splice(2,4);
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
    if(this.firstRowStatus == true){
      this.firstRowStatus = false;
      this.secRowStatus = true;
    }else{
      this.firstRowStatus = true;
      this.secRowStatus = false;
    }
  }
}
