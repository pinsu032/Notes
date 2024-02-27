import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  public product:any={};
  public buttonText : string="Preview";
  public thenBlock:TemplateRef<any>|null = null;

  @ViewChild('description',{static:true}) public description:TemplateRef<any>|null=null;
  @ViewChild('preview',{static:true}) public preview:TemplateRef<any>|null=null;


  public loadProduct(){
    fetch("http://fakestoreapi.com/products/2")
    .then(response=> response.json())
    .then(data =>{
      this.product = data;
    })
  }

  constructor(){}
  ngOnInit(): void {
    this.loadProduct();
    this.thenBlock = this.preview;
  }

  public toggleClick(){
    this.buttonText = (this.buttonText=='Preview')?'Description':'Preview';
    this.thenBlock  = (this.thenBlock==this.preview)?this.description:this.preview
  }

 
}
