import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './Home/home/home.component';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { ProductInfoPanelComponent } from './Components/Products/product-info-panel/product-info-panel.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GenerateBillComponent } from './Components/generate-bill/generate-bill.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    ContactComponent,
    ProductComponent,
    GenerateBillComponent,
    AdminDashboardComponent,
    ProductInfoPanelComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        positionClass : 'toast-bottom-right'
      }
    ), 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    DataTablesModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
