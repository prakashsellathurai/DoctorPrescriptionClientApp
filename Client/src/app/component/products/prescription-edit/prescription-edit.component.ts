import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Prescription } from '../../../model/prescription';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-prescription-edit',
  templateUrl: './prescription-edit.component.html',
  styleUrls: ['./prescription-edit.component.css']
})

export class PrescriptionEditComponent  {
  @Input('Prescription') Prescription: Prescription;
  subscription: Subscription;
  Prescription$;
  constructor() { }
  initialiseFetch() { return  this.Prescription; }
  checkPrescriptionexistence() { return (this.initialiseFetch()) ? true : false; }
  getTotalItems() {
    console.log(this.Prescription);
   return (this.checkPrescriptionexistence()) ? this.Prescription.totalItemsCount : 0;
  }
 
}

