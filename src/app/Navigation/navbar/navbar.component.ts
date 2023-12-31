import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { user } from 'src/app/Models/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  @Input() IsAdmin: boolean = false;
  username: string = "";
  constructor(private authService: AuthenticationService, private route: Router) { }
  ngOnInit(): void {

    this.authService.isLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
      this.IsAdmin = this.authService.checkIsAdmin();
      console.log(this.IsAdmin);
    });
    this.isLoggedIn = (this.isLoggedIn || this.authService.CheckLogin());
    debugger;
  }

  logout() {
    localStorage.removeItem("Token");
    this.authService.loggedInUser = new user();
    this.authService.isLoggedIn.next(false);
    this.route.navigateByUrl("");
  }
}
