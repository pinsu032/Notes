import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../services/ishopapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public users:any[]=[];
  constructor(private ishop: IshopapiService , private router: Router) { }

  ngOnInit(): void {
    //this.displayUsers();
  }

  public registerClick(userDetails:any){
    alert(userDetails);
    this.ishop.registerUser(userDetails).subscribe();
    alert("Register Successfully..");
    this.router.navigate(['/login']);
  }

  public displayUsers(){
    this.ishop.getUsers().subscribe(
      data=>{
      console.log(data);
      this.users = data;
  });
    console.log(this.users);
  }

}
