import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products',
  template: `
  <h2>Product title goes here....</h2>
  <p>Product id:{{productid}}</p> `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productid: number;

 constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this.productid = + this._route.snapshot.params['id'];
  }

}
