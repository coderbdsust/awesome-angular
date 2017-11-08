import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username:String;
  @Input() password:String;

  constructor(private router:Router) {
    console.log('LoginComponent:Constructor');
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('LoginComponent:onSubmit');
    console.log(this.username);
    console.log(this.password);
  }

  onCancel(){
    console.log('LoginComponent:onCancel');
  }

  onSignUp(){
    console.log('LoginComponent:onSignUp');
    this.router.navigate(['/signup']);
  }

}
