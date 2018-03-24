import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products$;
  constructor(public Productservice: ProductService) {
    this.products$ = this.Productservice.getAll();
  }

}
