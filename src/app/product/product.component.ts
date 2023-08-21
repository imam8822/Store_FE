import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product/product.service';
import { Product } from '../Models/product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dtOptions: DataTables.Settings = {};
dtTrigger : Subject<any> = new Subject<any>();
  constructor(private _service: ProductService) { }
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.LoadProducts();

  }

  LoadProducts(){
    this._service.getAllProducts().subscribe((res) => {
      this.products = res.data;
      this.dtTrigger.next(null);
    });
  }

}
