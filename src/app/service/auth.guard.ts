import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private authService:AuthService){
    console.log('AuthGuard');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let isAuthenticated=this.authService.isAuthenticated();
    if(isAuthenticated){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
