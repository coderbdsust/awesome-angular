import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../../../dto/UserDTO";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  users:UserDTO[]=[];
  selectedUser:UserDTO=null;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

  onSeletedUser(user:UserDTO){
    console.log('UserListComponent:OnSelectedUser');
    console.log(user);
    this.selectedUser=user;
  }

}
