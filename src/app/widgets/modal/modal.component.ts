import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template:`
  <div class="row ecom-modal-row">
    <!-- .col-lg-4 --> 
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
      <img src="{{data.cover}}" alt="data.title" class="rounded-left" style="width:100%;height:auto;">
    </div>
    <!-- /.col-lg-4 -->
    <!-- .col-lg-8 -->
    <div class="col-lg-8 col-md-6 col-sm-6 col-xs-6">
      <h5 class="ecom-modal-title">{{data.title}}</h5>
      <h5 class="ecom-modal-price">Prix : {{data.price}} &euro;</h5>
      <div class="ecom-modal-stock">
        
          
        
        <span><i class="material-icons">check_circle</i>En stock</span>
      </div>
      <h6 style="margin-top:15px;">Synopsis :</h6>
      <p style="text-align:justify;">
          {{data.synopsis}}
      </p>
      <div class="col-lg-12 ecom-modal-social-row">
        <app-social [parentId]="modalSocialId"></app-social>
      </div>
    </div>
    <!-- /.col-lg-8 -->

  </div>
  `,
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  
  @Input () item;
  data:any[] = [];
  public modalSocialId:number;
  
  constructor() {
  }

  ngOnInit() {
    this.data = this.item;
    this.modalSocialId = 2;
  }
}
