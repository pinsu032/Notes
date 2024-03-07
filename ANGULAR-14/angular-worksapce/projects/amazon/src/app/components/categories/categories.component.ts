import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories :string[] = [];
  public mobile:string = '';
  constructor(private cookie: CookieService,private router: Router) { }

  ngOnInit(): void {
    fetch("http://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data=>{
      this.categories = data;
    })
    this.mobile = this.cookie.get('mobile');
  }
  public signOutClick(){
    this.cookie.delete('mobile');
    this.router.navigate(['/login']);
  }
}
