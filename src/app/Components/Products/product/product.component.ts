import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dtOptions: DataTables.Settings = {};
dtTrigger : Subject<any> = new Subject<any>();
selectedRow :any;
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
 
  selectRow(item:any){
    this.selectedRow = item;
    console.log(item);
  }


}