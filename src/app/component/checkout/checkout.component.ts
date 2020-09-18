import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {
  user = localStorage.getItem('user');
  patientDetails = {};
  constructor(private router: Router) {
  }
  HandlePatientDetail(patientDetails) {
this.patientDetails = patientDetails;
  }

  generateQr() {
    this.router.navigate(['/printpage', this.patientDetails]);
  }
}
