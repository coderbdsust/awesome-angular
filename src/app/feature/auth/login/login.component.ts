import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username:String;
  @Input() password:String;

  constructor() {
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
  }

}
