import { Component, OnInit } from '@angular/core';
import { AppRoutingModule, } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productid: number;

//  constructor(private _route: ActivatedRoute, private _router: AppRoutingModule) {

//   }

  ngOnInit() {
    // this.productid = + this._route.snapshot.queryParams['id'];
  }

}
