import {RouterModule, Routes} from '@angular/router'
import {UserListComponent} from "./feature/user/userlist/userlist.component";
import {BundleListComponent} from "./feature/bundle/bundle-list/bundle-list.component";
import {LoginComponent} from "./feature/auth/login/login.component";
import {SignupComponent} from "./feature/auth/signup/signup.component";
import {AuthGuard} from "./service/auth.guard";

const APP_ROUTES:Routes=[
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user/show', component: UserListComponent, canActivate:[AuthGuard]},
  {path:'bundle/show', component: BundleListComponent, canActivate:[AuthGuard]},
]

export const Routing=RouterModule.forRoot(APP_ROUTES);
