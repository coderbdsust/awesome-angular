import {RouterModule, Routes} from '@angular/router'
import {UserListComponent} from "./feature/user/userlist/userlist.component";
import {BundleListComponent} from "./feature/bundle/bundle-list/bundle-list.component";
import {LoginComponent} from "./feature/auth/login/login.component";
import {SignupComponent} from "./feature/auth/signup/signup.component";
import {LayoutComponent} from "./shared/layout/layout.component";

const APP_ROUTES:Routes=[
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user/show', component: UserListComponent},
  {path:'bundle/show', component: BundleListComponent},
  {path:'layout', component: LayoutComponent},
  {path:'',redirectTo: 'user/show', pathMatch: 'full'}
]

export const Routing=RouterModule.forRoot(APP_ROUTES);
