import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : boolean = false;
  username:string = "";
  constructor(private authService:AuthenticationService,private route:Router){}
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(res=> this .isLoggedIn = res);
    this.isLoggedIn = (this.isLoggedIn || this.authService.CheckLogin());
    this.username = localStorage.getItem("Username")!;
  }

  logout(){
    localStorage.removeItem("Token");
    this.authService.isLoggedIn.next(false);
    this.route.navigateByUrl("");
  }
}
