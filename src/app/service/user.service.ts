import { Injectable } from '@angular/core';
import {UserDTO} from "../dto/UserDTO";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserService {

  private users:UserDTO[]=[];

  constructor(private afd:AngularFireDatabase) { }

  getUsers():UserDTO[]{
    return this.users;
  }

  addUsers(users:UserDTO[]){
    Array.prototype.push.apply(this.users,users);
  }

  addUser(user:UserDTO){
    this.afd.database.ref('/users').push(user).then((val)=>{
      this.users.push(user);
    });

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
