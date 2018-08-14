import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  team;
  teamArray = [];
  allTeam;
  widgetSatus:boolean = false;

  constructor(private _teamService: ApiService) {
    
   }

  ngOnInit() {
    this.getTeam(this.team);
  }

  getTeam(team):any{
    this.team = team;
    this._teamService.getUsers("https://randomuser.me/api/?results=3").subscribe(
      data => { 
        this.team = data; 
        this.team = this.team.results;
        this.resolveAfterdelay(this.widgetSatus);
        return this.team;
      },
      err => console.error(err),
      () => console.log('done loading team')
    );
  }
  
  setTeam(widgetSatus):boolean{
    this.widgetSatus = widgetSatus;
    this.team.map((val, index, data)=>{
      let teamMember = {
        "name" : data[index].name,
        "img" : data[index].picture.large,
        "phone" :data[index].phone,
        "email" : data[index].email
      };
      this.teamArray.push(teamMember);
    });
    return this.widgetSatus = true;
  }

  resolveAfterdelay(widgetSatus) {
    this.widgetSatus = widgetSatus;
    return new Promise(resolve => {
      setTimeout(() => {
        this.setTeam(this.widgetSatus);
        resolve('resolved');
      }, 
      1000);
    });
  }
  
  
  
  

}
