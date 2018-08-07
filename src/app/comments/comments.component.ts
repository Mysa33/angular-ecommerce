import { Component, OnInit, Input } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  @Input() parentWidgetId; 
  users;
  result;
  commentsArray;
  usersArray;
  defaultCommentsWidgetId:number;
  widgetStyleId:number = 0;

  constructor(private _userServices: ApiService) { }

  ngOnInit() {
    this.defaultCommentsWidgetId = this.parentWidgetId;
    this.getUsers();
  }

  getUsers():any{
    this._userServices.getUsers("https://randomuser.me/api/?results=4").subscribe(
      data => { 
        this.users = data; 
        this.users = this.users.results; 
        this.setUsers(this.users);
        return this.users
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }
  setUsers(users):any{
    this.users = users;
    this.commentsArray = [];
    const fakeComment:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    this.result = this.users.map((data, index, arr) => {
      this.usersArray = {
        "index" : index,
        "name" : data.name,
        "img" : data.picture,
        "comment" : fakeComment
      }
      this.commentsArray.push(this.usersArray);
    });
    return this.commentsArray;
  }
  setWidgetColor(defaultCommentsWidgetId):any{
    this.defaultCommentsWidgetId = defaultCommentsWidgetId;
    console.log(this.defaultCommentsWidgetId);
    if(this.defaultCommentsWidgetId === 0 || 1){
      
      return '#ffffff';//Default or Footer
    }else{
      console.log(" comments 2 ");
      return '#e40046';//sidebar
    }
  }
}
