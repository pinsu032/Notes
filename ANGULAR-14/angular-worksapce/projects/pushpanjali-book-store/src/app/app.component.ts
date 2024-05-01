import { Component, OnInit } from '@angular/core';
import { UserContract } from './contracts/UserContract';
import { AuthenticationService } from './service/authentication.service';
import { Role } from './contracts/Role';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pushpanjali-book-store';
  user?: UserContract | null;
  session : boolean = true;
  flag : boolean = false;

    constructor(private authenticationService: AuthenticationService,
      private router : Router) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    moveToSession(){
      this.session = false;
      this.flag = true;
      this.router.navigate(['session']);
    }

    backToMain(){
      this.session = true;
      this.flag = false;
      this.router.navigate(['home']);
    }

    get isAdmin() {
        return this.user?.role === Role.Admin;
    }

    logout() {
      this.authenticationService.logout();
  }
}
