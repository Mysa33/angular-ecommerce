import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  
  @Input () item;
  data:any = [];
  public modalSocialId:number;
  
  constructor() {
  }

  ngOnInit() {
    this.data = this.item;
    this.modalSocialId = 2;
  }
}
