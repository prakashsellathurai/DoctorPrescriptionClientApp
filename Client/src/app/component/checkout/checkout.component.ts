import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {
  user = localStorage.getItem('user');
  constructor() {
  }
  HandlePatientDetail(patientDetails) {
    console.log(patientDetails);
  }

  generateQr() {
  }
}
