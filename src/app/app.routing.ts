import {RouterModule, Routes} from '@angular/router'
import {UserAddComponent} from "./feature/user/add/user.component";
import {UserListComponent} from "./feature/user/userlist/userlist.component";
import {BundleListComponent} from "./feature/bundle/bundle-list/bundle-list.component";

const APP_ROUTES:Routes=[
  {path:'user/show', component: UserListComponent},
  {path:'bundle/show', component: BundleListComponent},
  {path:'',component:UserListComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES);
