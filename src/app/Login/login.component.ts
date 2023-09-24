import { Component, OnInit, booleanAttribute } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../Models/login';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { user } from '../Models/user.model';
import { LoginResponse } from '../Models/login.Response';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private toast: ToastrService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    if (this.authService.CheckLogin()) {
      this.router.navigateByUrl('home');
    }
  }
  loggedInUser: user = new user();
  showLoading: boolean = false;
  loginDTO = new Login();
  response = new LoginResponse();
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
      this.authService.login(this.loginDTO).subscribe((res) => {
        this.response = res
        if (this.response.isSuccess) {
          localStorage.setItem('Token', this.response.message);
          this.loggedInUser = this.authService.getUser(this.response.message);
          this.authService.isLoggedIn.next(true);
          this.toast.success('Login Successful');
          debugger;
          if (this.loggedInUser.Roles.includes('Admin')) {
            this.router.navigateByUrl('admin-dashboard');
          }
          else {
            this.router.navigateByUrl('home');
          }
        }
        else {
          this.toast.error('Invalid User');
        }
      });;
      this.showLoading = false;
    }
  }

}
