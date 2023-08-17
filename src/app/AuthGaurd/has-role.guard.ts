import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class hasRole  {

  constructor(private authService:AuthenticationService){}
  isLoggedIn : boolean = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const res=  (this.authService.loggedInUser.Roles.includes(route.data['role']));
      debugger;
      return (this.authService.loggedInUser.Roles.includes(route.data['role']));
  }
  
}