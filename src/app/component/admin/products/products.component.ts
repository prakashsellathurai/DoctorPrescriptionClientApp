import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Medicine } from '../../../model/medicine';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
products: Medicine[];
subscription: Subscription;
tableResource: DataTableResource<Medicine>;
items: Medicine[];
itemCount: number;

  constructor(private productService: ProductService) {
  this.subscription = this.productService.getAll().subscribe(products => {
    this.products = products ;
    this.intializeTable(this.products);
  });
  }


  private intializeTable(products: Medicine[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 , limit: 10})
    .then(items => this.items = items );
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }



  reloadItems(params) {
    if (!this.tableResource) { return ; }
    this.tableResource.query(params).then(items => this.items = items);
  }
  filter(query: string) {
let filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
this.intializeTable(filteredProducts);
}
  ngOnInit() {
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
