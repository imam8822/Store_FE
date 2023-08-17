import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../Models/response';
import { user } from '../Models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  constructor(
    private toast: ToastrService,
    private router: Router,
    private http: HttpClient) {
    this.token = localStorage.getItem("Token")!;
    if (this.token != null || this.token != undefined) {
      debugger;
      this.loggedInUser = this.getUser(this.token);
    }
  }

  public register(user: Register): Observable<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  public login(login: Login): boolean {
    this.http.post<Response>(`${environment.apiUrl}/${this.loginUrl}`, login).
      subscribe((response) => {
        if (response.isSuccess) {
          localStorage.setItem('Token', response.message);
          this.token = response.message,
            this.getUser(this.token);
          this.isLoggedIn.next(true);
        this.router.navigateByUrl('home');
        }
        else {
          this.toast.error('Invalid User');
        }
      });
    return true;
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
  private getUser(token: string): user {
    return JSON.parse(atob(token.split('.')[1])) as user;
  }

  public weatherForecast(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherURl}`, { headers: headers });
  }


}
