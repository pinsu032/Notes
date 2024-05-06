import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../service/ishopapi.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { OrderDetails } from '../../contracts/OrderDetails';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public Products:any = []; 
    public orderDetail : any = new FormBuilder();
    public cartDetails : OrderDetails = {
      email: undefined,
      category: '',
      pid: 0,
      productName: '',
      price: 0,
      noOfProduct: 0
    };
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
    public cartCount : number = 0;
    public productInCart : any[] = [];
    public totalPrice : number = 0;
    public cartFlag : boolean = false;
    public cartNotEmpty : boolean = true;

  constructor(private service: IshopapiService,
    private fb : FormBuilder,private route:Router,
    private authService : AuthenticationService) 
    { }

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
    console.log(this.authService.userValue?.email);

    this.orderDetail = this.fb.group({
      email:this.fb.control(this.authService.userValue?.email),
      category : this.fb.control(this.categoryName),
      pid : this.fb.control(data.pid),
      productName : this.fb.control(data.productName),
      price : this.fb.control(data.productPrice),
      noOfProduct : this.fb.control(0)
    })
  }

  
 
  ngOnInit(): void {
    console.log("inside product component");
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

    this.service.loadProductsByCategory(e).subscribe(
      data =>{
        this.Products = data;
      },
      error=>{
        Swal.fire({
          text:"Something went wrong..",
          icon:"error",
          confirmButtonText:"OK"
        })
      }
    )
    
  }

  public placeOrder(orderDetails:any){
    console.log(orderDetails);
    this.service.placeOrder(orderDetails).subscribe( 
      (data) => {
        this.message = data.status;
        //alert(this.message);
        Swal.fire({
          text: this.message,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.route.navigate(['home']);
        console.log(data.status);
      },
      (error) => {
        // Handle error (e.g., show an error toast message)
        Swal.fire({
          text: this.message,
          icon: 'error',
          confirmButtonText: 'Danger'
        })
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Stock Not Available, It will come soon..",
          });
          this.buttonFlag = false;
        }
      })
  }

  addToCart(id:number){
    this.service.addToCart(id,null).subscribe(data=>{
      Swal.fire({
        text:"Product Added To Cart",
        icon:'success',
        timer:2000
      });
      this.cartNotEmpty = true;
     },
     error => {
      Swal.fire({
        text:"Please try after some time",
        icon:'info',
        timer:2000
      });
     }
   )
  }

  getCartProducts(){
    this.cartFlag = true;
  //  this.loadProducts();
    this.service.loadProducts().subscribe(data =>{
      this.Products = data;
      console.log("this is product after call ::",this.Products)
      this.productInCart = this.Products.filter((pr: { isInCart: boolean; }) => pr.isInCart==true);
      console.log("card item after filter:::",this.productInCart)
      for(let item of this.productInCart){
        this.totalPrice += item.cartCount * item.productPrice;
        this.cartCount = this.cartCount + item.cartCount;
       
      }
      console.log("this cart count::",this.cartCount)
      if(this.cartCount == 0){
        this.cartNotEmpty = false;
      }else{
        this.cartNotEmpty = true;
      }
      console.log("this is all product::",this.productInCart);
    })
   
   
  }

  placeOrderFromCart(){
    for(let product of this.productInCart){
      this.cartDetails.email = this.authService.userValue?.email;
      this.cartDetails.category = product.category;
      this.cartDetails.pid = product.pid;
      this.cartDetails.productName = product.productName;
      this.cartDetails.price = product.productPrice;
      this.cartDetails.noOfProduct = product.cartCount;
      console.log(this.cartDetails);
      this.placeOrder(this.cartDetails);
    }

  }

  clearAll(){
    this.cartFlag = false;
    this.totalPrice = 0;
    this.cartCount = 0;

  }

  public filterProduct(e:string){
    //console.log(`http://fakestoreapi.com/products/category/${e}`);
    //this.loadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

  public remove(p:any){
    this.service.removeFromCart(p).subscribe(
      data => {
        Swal.fire({
          text:data.msg,
          icon:'success',
          confirmButtonText:'Ok'

        }
        )
        //this.Products = this.Products.filter((pr: { pid: any; }) => pr.pid==p.pid);
        this.getCartProducts();
      },

      error => {
        Swal.fire({
          text:"something went wrong",
          icon:'error',
          confirmButtonText:'Ok'
        })
      }
    )
  }

}