import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  template: `
  <div class="row ecom-m-nav-row">
    <div class="col-lg-12">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" routerLink="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/shop">Notre catalogue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/about">Qui sommes-nous ?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/profil">Profile</a>
        </li>
      </ul>
    </div>
    <div class="col-lg-12" style="padding-left:30px;">
      <app-social [parentId]="2"></app-social>
    </div>
  </div>
  `,
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
