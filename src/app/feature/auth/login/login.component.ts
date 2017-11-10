import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SystemUserDTO} from "../../../dto/SystemUserDTO";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //biswa.dcc@gmail.com, code1234
  @Input() loginUser:SystemUserDTO=new SystemUserDTO();


  constructor(private router:Router, private authService:AuthService) {
    console.log('LoginComponent:Constructor');
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('LoginComponent:onSubmit');
    console.log(this.loginUser);
    let sUser = new SystemUserDTO();
    sUser.email=this.loginUser.email;
    sUser.password=this.loginUser.password;
    this.authService.signIn(sUser);
    this.router.navigate(['/user/show']);
  }

  onCancel(){
    console.log('LoginComponent:onCancel');
  }

  onSignUp(){
    console.log('LoginComponent:onSignUp');
    this.router.navigate(['/signup']);
  }

}
