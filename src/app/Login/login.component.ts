import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../Models/login';
import { Token } from '@angular/compiler';
import { Response } from '../Models/response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

constructor(private authService:AuthenticationService,private toast:ToastrService,private router:Router){}

  loginDTO = new Login();
  response = new Response();
  loginForm = new FormGroup({
    email : new FormControl("email",[Validators.required,Validators.email]),
    password : new FormControl("password",[Validators.required,Validators.minLength(6)])

  })

  get Email (): FormControl {
    return this.loginForm.get("email") as FormControl;
  }

  get Pwd (): FormControl {
    return this.loginForm.get("password") as FormControl;
  }


  Login(){
    this.loginDTO.email = this.loginForm.value.email!;
    this.loginDTO.password = this.loginForm.value.password!;

    this.authService.login(this.loginDTO).subscribe((response)=>{
      if(response.isSuccess)
      {
          this.toast.success("Login Successful")
          localStorage.setItem("Token",response.message);
          this.router.navigateByUrl("home")
      }
      else
      {
        this.toast.error("Invalid User")
      }
    })
  }
}


