import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../service/ishopapi.service';
import { AuthenticationService } from '../../service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public orders : any[] = [];
  public clicked : boolean = false;

  constructor(private ishop: IshopapiService,private authService : AuthenticationService) { }

  ngOnInit(): void {
  }

  getOrderDetailsByUserId(){
    console.log("inside home");
    this.ishop.getOrderDetailsByUserId(this.authService.userValue?.email).subscribe(data =>{
      console.log(data);
      this.clicked = true;
      this.orders = data;
    },
    error => {
      Swal.fire({
        text:"Something went wrong",
        icon:"error",
        confirmButtonText:"OK"
      })
    }
  )
  }

}
