import { Component, OnInit } from '@angular/core';

import {ApiService} from '../shared/services/api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  users;
  test;
  result;
  commentsArray;
  usersArray;

  
  constructor(private _userServices: ApiService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers(){
    this._userServices.getUsers("https://randomuser.me/api/?results=3").subscribe(
      data => { 
        this.users = data; 
        this.users = this.users.results; 
        this.setusers(this.users);
        return this.users
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
    
  }
  setusers(users){
    this.users = users;
    this.commentsArray = [];
    const fkaeComment:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    this.result = this.users.map((data, index, arr) => {
      this.usersArray = {
        "index" : index,
        "name" : data.name,
        "img" : data.picture,
        "comment" : fkaeComment
      }
      this.commentsArray.push(this.usersArray);
    });
    console.log("this.commentsArray : ", this.commentsArray);
    return this.commentsArray;

  }


}
