import { Component, OnInit, Input } from '@angular/core';
import { PrescriptionService } from '../../../service/prescription.service';
import { Medicine } from '../../../model/medicine';
import { Prescription } from '../../../model/prescription';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
@Input('product') product: Medicine;
@Input('prescription') prescription: Prescription;
  constructor(private Prescriptionservice: PrescriptionService) { }

  ngOnInit() {
  }
  onSelect() {

    this.Prescriptionservice.addTitle(this.product.title);
   }
   OnDelete() {

     this.Prescriptionservice.removeTitle(this.product.title);
   }
}
