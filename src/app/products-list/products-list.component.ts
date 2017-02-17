import { Component, OnInit } from '@angular/core';

import { IProduct } from 'app/products/product.interface';
import { PRODUCTSDATA } from 'app/products/data/product-data';


@Component({
  selector: 'app-products-list',
  moduleId: module.id,
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  pageTitle: string;

  products: IProduct[];
  constructor() { }

  ngOnInit() {
    this.products = PRODUCTSDATA;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product: ' + message;
  }

}
