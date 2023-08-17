import { Component, OnInit } from '@angular/core';
import { Login } from './Models/login';
import { Register } from './Models/register';
import { Response } from './Models/response';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export default class AppComponent implements OnInit {
  title = 'Store_FE';
  loginDTO = new Login();
  registerDTO = new Register();
  responseDTO = new Response();
  isLoggedIn:boolean = false;
constructor(private authService:AuthenticationService,private route:Router){}

ngOnInit(): void {
  this.authService.isLoggedIn.subscribe(res=> this .isLoggedIn = res)
  this.isLoggedIn = this.authService.CheckLogin();
}

  Weather(){
    this.authService.weatherForecast().subscribe((weatherData:any)=>{
      console.log(weatherData);
    })
  }

}

