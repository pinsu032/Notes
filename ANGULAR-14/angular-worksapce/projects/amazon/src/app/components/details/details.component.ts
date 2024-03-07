import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public pid : string|null = null;
  public product:any={};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get("id");
    fetch(`http://fakestoreapi.com/products/${this.pid}`)
    .then(response=> response.json())
    .then(data=>{
      this.product = data;
    })
  }

}
