import { Injectable } from '@angular/core';
import {SystemUserDTO} from "../dto/SystemUserDTO";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router:Router) {
    console.log('AuthService:construct');
  }

  signUp(systemUser:SystemUserDTO){
    console.log('AuthService:signUp');

      firebase.auth().createUserWithEmailAndPassword(systemUser.email, systemUser.password)
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('insert error', error);
        });

  }

  signIn(systemUser:SystemUserDTO){
    console.log('AuthService:signIn');

      firebase.auth().signInWithEmailAndPassword(systemUser.email, systemUser.password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
  }

  isAuthenticated(){
    console.log('AuthService:isAuthenticated');

      var user = firebase.auth().currentUser;
      if (user) {
        return true;
      } else {
        return false;
      }

  }

   logout(){

      firebase.auth().signOut();
      this.router.navigate(['/login']);

  }

}
