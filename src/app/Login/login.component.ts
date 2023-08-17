import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../Models/login';
import { Token } from '@angular/compiler';
import { Response } from '../Models/response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { user } from '../Models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthenticationService,
    private toast: ToastrService,
    private router: Router
  ) {}
  showLoading: boolean = false;
  loginDTO = new Login();
  response = new Response();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  userDTO = new user();

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get Pwd(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  Login() {
    if (this.loginForm.valid) {
      this.showLoading = true;
      this.loginDTO.email = this.loginForm.value.email!;
      this.loginDTO.password = this.loginForm.value.password!;
      this.authService.login(this.loginDTO).subscribe((response) => {
        if (response.isSuccess) {
          this.toast.success('Login Successful');
          this.userDTO = JSON.parse(response.message);
          localStorage.setItem('Token', this.userDTO.Token);
          localStorage.setItem('Username', this.userDTO.FirstName);
          this.authService.isLoggedIn.next(true);
          this.router.navigateByUrl('home');
        } else {
          this.toast.error('Invalid User');
        }
      });
      this.showLoading = false;
    }
  }
}
