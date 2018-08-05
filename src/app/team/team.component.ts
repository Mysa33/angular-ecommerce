import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team;
  teamArray = [];
  allTeam;
  constructor(private _teamService: ApiService) {
    
   }

  ngOnInit() {
    this.getTeam(this.team);
  }

  getTeam(team){
    this.team = team;
    this._teamService.getUsers("https://randomuser.me/api/?results=3").subscribe(
      data => { 
        this.team = data; 
        this.team = this.team.results;
        //set team
        this.setTeam();
        return this.team;
      },
      err => console.error(err),
      () => console.log('done loading team')
    );
  }
  
  setTeam(){
    this.team.map((val, index, data)=>{
      let teamMember = {
        "name" : data[index].name,
        "img" : data[index].picture,
        "phone" :data[index].phone,
        "email" : data[index].mail
      };
      console.log("new member : ", teamMember);
      this.teamArray.push(teamMember);
    });
  }
}
