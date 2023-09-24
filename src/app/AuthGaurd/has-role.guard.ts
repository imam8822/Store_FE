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
  isAuthorized : boolean = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.isLoggedIn.subscribe(res=> {
        this.isAuthorized = this.authService.loggedInUser.Roles.includes(route.data['role'])
      })
      return this.isAuthorized;
  }
  
}