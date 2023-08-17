import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './AuthGaurd/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { hasRole } from './AuthGaurd/has-role.guard';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'contact', canActivate: [AuthGuard,hasRole], component: ContactComponent, data: {
      role: "Admin"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
