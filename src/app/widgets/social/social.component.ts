import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  template:`
  <div class="ecom-social-col ecom-social-first">
    <h6 [ngStyle]="{'color':setTitleColor(socialDefaultId) }">
        Social :
    </h6>
  </div>
  <div [ngStyle]="{'display':setCompDisplay(socialDefaultId) }">
      <div class="ecom-social-col" [ngStyle]="{'display':setCompDisplay(socialDefaultId) }">
          <i class="material-icons" [ngStyle]="{'color':setCompColor(socialDefaultId) }">share</i>
      </div>
      <div class="ecom-social-col" [ngStyle]="{'display':setCompDisplay(socialDefaultId) }">
          <i class="material-icons" [ngStyle]="{'color':setCompColor(socialDefaultId) }">thumb_up_alt</i>
      </div>
      <div class="ecom-social-col" [ngStyle]="{'display':setCompDisplay(socialDefaultId) }">
          <i class="material-icons" [ngStyle]="{'color':setCompColor(socialDefaultId) }">photo_camera</i>
      </div>
  </div>
  `,
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  
  @Input() parentId:number;
  socialDefaultId:number = 0;
  public footerSocialId:number;
  
  constructor() {}

  ngOnInit() {
    this.socialDefaultId = this.parentId;
    this.setCompColor(this.socialDefaultId);
    this.setCompDisplay(this.socialDefaultId);
  }

  setCompColor(socialDefaultId){
    this.socialDefaultId = socialDefaultId;
    switch (this.socialDefaultId) {
      case 0:
        return '#e40046';//default
      case 1:
        return '#ffffff';//footer
      case 2:
        return '#e40046';//modal
      case 3:
        return '#e40046';//todo
        default:
          console.log(' erreur ' + this.socialDefaultId + ' n"est pas une valeur.');
        break;
    }
  }

  setCompDisplay(socialDefaultId){
    this.socialDefaultId = socialDefaultId;
    switch (this.socialDefaultId) {
      case 0:
        return 'block';//Default
      case 1:
        return 'block';//Footer
      case 2:
        return 'inline-block';//Modal
      case 3:
        return 'block';//Sidebar
        default:
          console.log(' erreur ' + this.socialDefaultId + ' n"est pas une valeur.');
        break;
    }
  }
  
  setTitleColor(socialDefaultId){
    this.socialDefaultId = socialDefaultId;
    switch (this.socialDefaultId) {
      case 0:
        return '#e40046';//Default
      case 1:
        return '#e40046';//Footer
      case 2:
        return '#333';//Modal
      case 3:
        return '#333';//Sidebar
        default:
          console.log(' erreur ' + this.socialDefaultId + ' n"est pas une valeur.');
        break;
    }
  }
  
  
}
