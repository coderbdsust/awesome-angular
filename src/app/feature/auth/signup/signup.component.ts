import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SystemUserDTO} from "../../../dto/SystemUserDTO";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() systemUser:SystemUserDTO=new SystemUserDTO();
  // signUpForm:ngForm;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('SignupComponent:onSubmit');
    console.log(this.systemUser);
    if(this.systemUser.confirmPassword===this.systemUser.password) {
      let sUser = new SystemUserDTO();
      sUser.email = this.systemUser.email;
      sUser.password = this.systemUser.password;
      this.authService.signUp(sUser);
      this.router.navigate(['login']);
    }else{
        alert('password not matched');
    }

  }

  onCancel(){
    console.log('SignupComponent:onCancel');
    this.router.navigate(['/login']);
  }
}
