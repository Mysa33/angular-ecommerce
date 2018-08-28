import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  footerSocialId:number;
  footerCommentsWidgetId:number;

  constructor() { }

  ngOnInit() {
    this.footerSocialId = 1;
    this.footerCommentsWidgetId = 1;
  }

}
