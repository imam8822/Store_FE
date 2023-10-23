import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login.component';
import { AuthGuard } from './AuthGaurd/auth.guard';
import { hasRole } from './AuthGaurd/has-role.guard';
import { ProductComponent } from './Components/Products/product/product.component';
import { GenerateBillComponent } from './Components/generate-bill/generate-bill.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ViewProductComponent } from './Components/Products/view-product/view-product.component';
import { AddEditProductComponent } from './Components/Products/add-edit-product/add-edit-product.component';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'view-product', canActivate: [AuthGuard,hasRole], component: ViewProductComponent, data: {
      role: "Admin"
    }
  },
  {
    path: 'add-product', canActivate: [AuthGuard,hasRole], component: AddEditProductComponent, data: {
      role: "Admin"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
