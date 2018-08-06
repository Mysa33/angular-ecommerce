import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  
  @Input() parentId:number;
  socialDefaultId:number = 0;
  public footerSocialId:number;
  
  constructor() {}

  ngOnInit() {
    this.socialDefaultId = this.parentId;
    console.log("parent Id in social component : ", this.socialDefaultId);
    this.setCompColor(this.socialDefaultId);
    this.setCompDisplay(this.socialDefaultId);
  }

  setCompColor(socialDefaultId){
    this.socialDefaultId = socialDefaultId;
    switch (this.socialDefaultId) {
      case 0:
        return '#e40046';//Default
      case 1:
        return '#ffffff';//Footer
      case 2:
        return '#e40046';
      case 3://Modal
        return '#ffffff';//todo
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
        return 'block';//todo
        default:
          console.log(' erreur ' + this.socialDefaultId + ' n"est pas une valeur.');
        break;
    }
  }
  
  
}
