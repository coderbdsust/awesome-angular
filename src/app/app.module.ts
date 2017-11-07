import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserAddComponent } from './feature/user/add/user.component';
import {routing} from "./app.routing";
import { FormsModule} from "@angular/forms";
import { UserListComponent } from './feature/user/userlist/userlist.component';
import { BundleListComponent } from './feature/bundle/bundle-list/bundle-list.component';
import {BundleService} from "./service/bundle.service";
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserAddComponent,
    UserListComponent,
    BundleListComponent
  ],
  imports: [
    BrowserModule,routing, FormsModule,HttpModule
  ],
  providers: [BundleService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
