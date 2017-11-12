import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../../../dto/UserDTO";
import {UserService} from "../../../service/user.service";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  users:UserDTO[]=[];
  selectedUser:UserDTO=null;
  public error=false;
  public message='';

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSeletedUser(user:UserDTO){
    console.log('UserListComponent:OnSelectedUser');
    console.log(user);
    this.selectedUser=user;
  }

}
