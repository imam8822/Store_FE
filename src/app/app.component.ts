import { Component } from '@angular/core';
import { Login } from './Models/login';
import { Register } from './Models/register';
import { Response } from './Models/response';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Store_FE';
  loginDTO = new Login();
  registerDTO = new Register();
  responseDTO = new Response();

constructor(private autheService:AuthenticationService){}

register(registerDTO:Register){
  this.autheService.register(registerDTO).subscribe();
}

Login(registerDTO:Login){
  this.autheService.login(registerDTO).subscribe((responseDTO)=>{
    localStorage.setItem("Token",responseDTO.message);
  })
}

  Weather(){
    this.autheService.weatherForecast().subscribe((weatherData:any)=>{
      console.log(weatherData);
    })
  }

}

