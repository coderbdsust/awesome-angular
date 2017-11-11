import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title='HRM-ANGULAR'
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  isAuth(){
   return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout().then((response)=>{
      this.authService.resetLoginUser();
      this.router.navigate(['/login']);
    }).catch((err)=>{
      console.log('logout error');
    });

  }

  public getLoggedEmail(){
    return this.authService.getLoginUser();
  }
}
