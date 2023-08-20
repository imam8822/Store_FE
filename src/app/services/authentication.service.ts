import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../Models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginResponse } from '../Models/login.Response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "Authenticate/Register";
  loginUrl = "Authenticate/Login";
  weatherURl = "WeatherForecast/GetWeatherForecast";
  token: string = "";
  isLoggedIn = new Subject<boolean>();
  loggedInUser: user = new user();
  response = new LoginResponse();
  constructor(
    private toast: ToastrService,
    private router: Router,
    private http: HttpClient) {
    this.token = localStorage.getItem("Token")!;
    if (this.token != null || this.token != undefined) {
      this.loggedInUser = this.getUser(this.token);
    }
  }

  public register(user: Register): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  public login(login: Login) :Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/${this.loginUrl}`, login);
  }

  public CheckLogin(): boolean {
    this.token = localStorage.getItem("Token")!;
    if (this.token != null && this.token != "") {
      return true;
    }
    else {
      return false;
    }
  }
  getUser(token: string): user {
    return JSON.parse(atob(token.split('.')[1])) as user;
  }

  public weatherForecast(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('Token'));
  debugger;
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherURl}`, { headers: headers });
  }


}
