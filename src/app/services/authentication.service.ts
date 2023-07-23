import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../Models/jwtAuth';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Models/response';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
registerUrl = "Authenticate/Register"
loginUrl = "Authenticate/Login"
weatherURl = "WeatheForecast"
  constructor(private http:HttpClient) {

   }

   public register(user: Register): Observable<Response>{
      return this.http.post<Response>(`${environment.apiUrl}/${this.registerUrl}`,user);
  }

   public login(login: Login): Observable<Response>{
    return this.http.post<Response>(`${environment.apiUrl}/${this.loginUrl}`,login);
 }
 public weatherForecast(): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherForecast}`);
 }
}
