import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../Models/jwtAuth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../Models/response';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
registerUrl = "Authenticate/Register";
loginUrl = "Authenticate/Login";
weatherURl = "WeatherForecast/GetWeatherForecast";
token:string = "";
  constructor(private http:HttpClient) {

   }

   public register(user: Register): Observable<Response>{
      return this.http.post<Response>(`${environment.apiUrl}/${this.registerUrl}`,user);
  }

   public login(login: Login): Observable<Response>{
    return this.http.post<Response>(`${environment.apiUrl}/${this.loginUrl}`,login);
  }

  public CheckLogin():boolean{
    this.token = localStorage.getItem("Token")!;
    console.log(this.token);
    if(this.token != null && this.token != ""){
      return true;
    }
    else{
      return false;
    }
  }

 public weatherForecast(): Observable<any>{
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('Token'));
   console.log(headers);  
   return this.http.get<any>(`${environment.apiUrl}/${this.weatherURl}`,{headers:headers});
 }


}
