import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../services/ishopapi.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public req : any = {};
  constructor(private ishop: IshopapiService,private router: Router,private cookie: CookieService) { }

  ngOnInit(): void {
  }

  public loginClick(userDetails:any){
    console.log(userDetails);
    this.ishop.login(userDetails).subscribe(data =>{ 
      console.log(data);
      this.req = data;
      if(this.req.msg == 'login success'){
        this.cookie.set('mobile',userDetails.mobile);
        this.router.navigate(['/categories']);
      }else{
       this.router.navigate(['/errorpage']);
      }
    });
  }

}
