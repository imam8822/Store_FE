import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {path : 'home',canActivate :[AuthGuard],component:HomeComponent},
  {path : 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
