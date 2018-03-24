import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryServiceService } from '../../../service/category-service.service';
import { ProductService } from '../../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
product = {};
id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoryServiceService,
    private productservice: ProductService) {
    this.categories$ = categoriesService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
this.productservice.get(this.id).take(1).subscribe(p => this.product = p );
    }
  }
save(product) {
  if (this.id) {
    this.productservice.update(this.id , product);
  }  else {
    this.productservice.create(product);
  }

this.router.navigate(['/admin/products']);
}

delete() {
  if (!confirm('Are u sure ?')) {
    return;
  }
this.productservice.delete(this.id);
this.router.navigate(['/admin/products']);
}
  ngOnInit() {
  }

}
