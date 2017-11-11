import { Injectable } from '@angular/core';
import {SystemUserDTO} from "../dto/SystemUserDTO";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {
  private isLoggedIn=false;
  private loginUser:any;

  constructor(private router:Router, public afAuth: AngularFireAuth) {
    console.log('AuthService:construct');
  }

  signUp(systemUser:SystemUserDTO){
    console.log('AuthService:signUp');
    return this.afAuth.auth.createUserWithEmailAndPassword(systemUser.email, systemUser.password);
  }

  signIn(systemUser:SystemUserDTO){
    console.log('AuthService:signIn');
    return this.afAuth.auth.signInWithEmailAndPassword(systemUser.email,systemUser.password);
  }

  isAuthenticated(){
    console.log('AuthService:isAuthenticated');
    return this.isLoggedIn;
  }

  saveLoginUser(){
    console.log('AuthService:saveLoginUser');
    var user = this.afAuth.auth.currentUser;
    if (user) {
      console.log('save');
      this.isLoggedIn=true;
      this.loginUser=user.email;
    } else {
      this.isLoggedIn=false;
    }
  }

  resetLoginUser(){
    console.log('AuthService:resetLoginUser');
    this.isLoggedIn=false;
    this.loginUser=null;
  }

  public logout(){
    console.log('AuthService:logout');
    return this.afAuth.auth.signOut();
  }

  public getLoginUser(){
    return this.loginUser;
  }

}
