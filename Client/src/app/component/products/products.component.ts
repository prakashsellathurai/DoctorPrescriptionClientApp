import { Component , OnInit, OnDestroy, } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Prescription: any;
  constructor(public Prescriptionservice: PrescriptionService) {
    }
    async ngOnInit() {
      this.subscription = (await this.Prescriptionservice.getPrescription())
                     .subscribe(Prescription => {
                      this.Prescription = Prescription;
                     });
     }
       ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }
