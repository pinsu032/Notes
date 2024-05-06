import { Component, OnInit} from '@angular/core';
import { IshopapiService } from '../../service/ishopapi.service';
import Swal from 'sweetalert2'


export interface Orders{
  orderId:number,
  category:string;
  productName:string;
  noOfProduct:string;
  totalPrice:number;
  creationTime:Date;
  createdBy:Date,
  status:string,
  fullName:string,
  mobile:number
}

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
   public order : Orders[] =[];
   
  constructor(private service : IshopapiService) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.order = this.order.filter(or => or.category.includes(filterValue));
    console.log(this.order);
  }

  public loadDetails(){
    this.service.getOrderDetails().subscribe(data=>{
      console.log(data);
      this.order = data;
      console.log(this.order);
    })
  }

  public changeStatus(id:number){
    this.service.changeStatus(id).subscribe(data =>{
      if(data.status == "PAID"){
        Swal.fire({
          text: "Status changed PAID",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.loadDetails();
      }else{
        Swal.fire({
          text: "Something went wrong",
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    })
  }

}
