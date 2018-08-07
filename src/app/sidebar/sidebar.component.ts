import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  SiderCommentsWidgetId:number = 2;

  constructor() { }

  ngOnInit() {
    this.SiderCommentsWidgetId = this.SiderCommentsWidgetId;
    console.log("this.SiderCommentsWidgetId",this.SiderCommentsWidgetId);
  }

}
