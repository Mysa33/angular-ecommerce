import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template:`
  <div class="container-fluid ecom-breadcrumb-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="ecom-breadcrumb-home" routerLink="/home">Home</span>
          <span class="ecom-breadcrumb-separator">/</span>
          <span class="ecom-breadcrumb-page">{{pageName}}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() pageName;

  constructor() { }

  ngOnInit() {
  }

}
