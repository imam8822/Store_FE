import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product/product.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private _service: ProductService) { }
  ngOnInit(): void {
    this._service.getAllProducts().subscribe((res) => {
      this.products = res.data;
    });
  }

}
