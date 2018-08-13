import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
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
