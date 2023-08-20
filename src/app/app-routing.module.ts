import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './AuthGaurd/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { hasRole } from './AuthGaurd/has-role.guard';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'products',canActivate: [AuthGuard], component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'generate-bill', canActivate: [AuthGuard,hasRole], component: GenerateBillComponent, data: {
      role: "Admin"
    }
  },
  {
    path: 'admin-dashboard', canActivate: [AuthGuard,hasRole], component: AdminDashboardComponent, data: {
      role: "Admin"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
