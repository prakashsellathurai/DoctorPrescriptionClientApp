import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
prescription$;
  constructor(private Prescriptionservice: PrescriptionService) { }

  async ngOnInit() {
    this.prescription$ = await this.Prescriptionservice.getPrescription();
  }

}
