import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../service/medicine.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public medicineService: MedicineService) { }

  ngOnInit() {
    
  }
  listProducts() {
   }

}
