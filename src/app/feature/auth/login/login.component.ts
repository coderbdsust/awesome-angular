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
  message:string;
  error:boolean=false;

  constructor(private router:Router, private authService:AuthService) {
    console.log('LoginComponent:Constructor');
  }

  ngOnInit() {
    console.log('LoginComponent:ngOnInit');
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/user/show']);
    }
  }

  onSubmit(){
    console.log('LoginComponent:onSubmit');
    console.log(this.loginUser);
    let sUser = new SystemUserDTO();
    sUser.email=this.loginUser.email;
    sUser.password=this.loginUser.password;
    this.authService.signIn(sUser).then(res=>{
      this.authService.saveLoginUser();
      this.error=false;
      this.message='';
      this.router.navigate(['/user/show']);
    }).catch((err)=>{
      console.log(err);
      this.error=true;
      this.message='Email or password is wrong';
    });
  }

  onCancel(){
    console.log('LoginComponent:onCancel');
  }

  onSignUp(){
    console.log('LoginComponent:onSignUp');
    this.router.navigate(['/signup']);
  }

}
