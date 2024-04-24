import { Component, OnInit } from '@angular/core';
import { UserContract } from './contracts/UserContract';
import { AuthenticationService } from './service/authentication.service';
import { Role } from './contracts/Role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pushpanjali-book-store';
  user?: UserContract | null;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user?.role === Role.Admin;
    }

    logout() {
      this.authenticationService.logout();
  }
}
