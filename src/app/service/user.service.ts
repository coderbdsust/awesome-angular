import { Injectable } from '@angular/core';
import {UserDTO} from "../dto/UserDTO";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserService {

  constructor(private afd:AngularFireDatabase) {
    console.log('UserService:constructor');
  }

  private collectionName='users';

  getUsers(limit:number){
    console.log('UserService:getUsers');
    // this.afd.database.ref(this.collectionName).once('value',(dataSnapShot)=>{dataSnapShot}).then(
    //   (snapshot)=>{
    //     snapshot.forEach(data=>{var user=data.val();
    //       console.log(user);
    //       let usr:UserDTO=user;
    //       console.log(usr);
    //     });
    //   }
    // );
    this.afd.database.ref(this.collectionName)

  }

  addUser(user:UserDTO){
    console.log('UserService:addUser');
    return this.afd.database.ref(this.collectionName).push(user);
  }

  editUser(user:UserDTO, nUser:UserDTO){
    console.log('UserService:editUser');
    let id='';
    return this.afd.database.ref(this.collectionName+'/'+id).push(user);
  }

  getUser(id:string){
    return this.afd.database.ref(this.collectionName);
  }

  deleteUserByIndex(idx:number){
    // this.users.splice(idx);
  }

  deleteUser(user:UserDTO){
    // this.users.splice(this.users.indexOf(user),1);
  }

}
