import { Injectable } from '@angular/core';
import {UserDTO} from "../dto/UserDTO";

@Injectable()
export class UserService {

  private users:UserDTO[]=[];

  constructor() { }

  getUsers():UserDTO[]{
    return this.users;
  }

  addUsers(users:UserDTO[]){
    Array.prototype.push.apply(this.users,users);
  }

  addUser(user:UserDTO){
    this.users.push(user);
  }

  editUser(oldUser:UserDTO, newUser:UserDTO){
    this.users[this.users.indexOf(oldUser)]=newUser;
  }

  getUser(id:number){
    return this.users[id];
  }

  deleteUserByIndex(idx:number){
    this.users.splice(idx);
  }

  deleteUser(user:UserDTO){
    this.users.splice(this.users.indexOf(user),1);
  }

}
