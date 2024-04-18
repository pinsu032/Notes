import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../services/ishopapi.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public Products:any = []; 
    public orderDetails : any = new FormBuilder();
    public stockResponse : any = {};
    public product : any ={
      "pid" : 0,
      "productName" : "",
      "productPrice" : ""
    }
    public formFlag : boolean = false;
    public message !: any ;
    public buttonFlag : boolean = false;
    public status!:any;
    public categoryName:string = ""; 
    public title : string = "";

  constructor(private service: IshopapiService,private fb : FormBuilder,private snackBar : MatSnackBar) { }

  public loadProducts(){
    this.title = "All Products";
    this.service.loadProducts().subscribe(data =>{
      this.Products = data;
    })
  }

  public setDefaultValue(data:any){
    this.formFlag = true;
    this.buttonFlag = false;
    console.log(data);
    this.product.pid = data.pid;
    this.product.productName = data.productName;
    this.product.productPrice = data.productPrice;
    console.log(this.product);

    this.orderDetails = this.fb.group({
      category : this.fb.control(this.categoryName),
      pid : this.fb.control(data.pid),
      productName : this.fb.control(data.productName),
      price : this.fb.control(data.productPrice),
      noOfProduct : this.fb.control(0)
    })
  }

  
 
  ngOnInit(): void {
    this.loadProducts();
  }

  public categoryChange(e:string){
    console.log("Category Name:"+e);
    this.categoryName = e;
    if(e=="Copy"){
      this.title = "Copy Products";
    }else{
      this.title = "Pen Products";
    }

    fetch(`http://localhost:8080/admin/fetch/${e}`)
    .then(res => res.json())
    .then(data =>{
      this.Products = data;
    })
    
  }

  public placeOrder(orderDetails:any){
    console.log(orderDetails);
    this.service.placeOrder(orderDetails).subscribe( 
      (data) => {
        this.message = data.status;
        this.snackBar.open("Order Placed...");
        //alert(this.message);
        console.log(data.status);
      },
      (error) => {
        // Handle error (e.g., show an error toast message)
        console.error('Error fetching data:', error);
      }
    );
  }

  public checkStock(pid:number,e:any){
      console.log("pid::"+pid);
      console.log(e.target.value);
      this.service.checkStock(pid,e.target.value).subscribe(data=>{
        this.stockResponse = data;
        console.log("Stock Response::"+this.stockResponse.stock);
        if(this.stockResponse.stock == 'Available'){
          this.buttonFlag = true;
        }else{
          this.buttonFlag = false;
        }
      })
  }

  public filterProduct(e:string){
    //console.log(`http://fakestoreapi.com/products/category/${e}`);
    //this.loadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

}
