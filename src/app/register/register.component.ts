import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../Models/register';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthenticationService,
    private toast: ToastrService,
    private router: Router
  ) {}

  registerDTO = new Register();
  response = new Response();
  registerForm = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]{1,10}$'),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]{1,10}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get fname(): FormControl {
    return this.registerForm.get('fname') as FormControl;
  }

  get lname(): FormControl {
    return this.registerForm.get('lname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Pwd(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPwd(): FormControl {
    return this.registerForm.get('confirmpassword') as FormControl;
  }

  register() {
    if (this.registerForm.valid) {
      this.registerDTO.FirstName = this.registerForm.value.fname!;
      this.registerDTO.LastName = this.registerForm.value.lname!;
      this.registerDTO.Email = this.registerForm.value.email!;
      this.registerDTO.Password = this.registerForm.value.password!;
      this.registerDTO.ConfirmPassword = this.registerForm.value.confirmpassword!;
      this.authService.register(this.registerDTO).subscribe((res) => {
        if (res.isSuccess) {
          this.toast.success('Registration Successful');
          this.router.navigateByUrl('');
        } else {
          this.toast.error('Registration Failed');
        }
      });
    }
  }
}
