import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserAddComponent } from './feature/user/add/user.component';
import {Routing} from "./app.routing";
import { FormsModule} from "@angular/forms";
import { UserListComponent } from './feature/user/userlist/userlist.component';
import { BundleListComponent } from './feature/bundle/bundle-list/bundle-list.component';
import {BundleService} from "./service/bundle.service";
import {UserService} from "./service/user.service";
import { LoginComponent } from './feature/auth/login/login.component';
import {AuthService} from "./service/auth.service";
import { SignupComponent } from './feature/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserAddComponent,
    UserListComponent,
    BundleListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, Routing, FormsModule,HttpModule
  ],
  providers: [BundleService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
