import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'amazon';
  public mobile:string ='';

  constructor(private cookie: CookieService){}
  ngOnInit(): void {
    this.mobile = this.cookie.get('mobile');
  }
  
}
