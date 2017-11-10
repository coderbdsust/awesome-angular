import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title='HRM-ANGULAR'
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  isAuth(){
   return this.authService.isAuthenticated();
  }

  onLogout(){
    return this.authService.logout();
  }
}
