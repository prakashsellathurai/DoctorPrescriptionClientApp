import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Prescription } from '../../../model/prescription';
import { Subscription } from 'rxjs/Subscription';
import { PrescriptionService } from '../../../service/prescription.service';

@Component({
  selector: 'app-prescription-edit',
  templateUrl: './prescription-edit.component.html',
  styleUrls: ['./prescription-edit.component.css']
})

export class PrescriptionEditComponent implements OnInit {
  @Input('Prescription') Prescription: Prescription;
  subscription: Subscription;
  ExpansionPanelItemTitle$;
  ExpansionPanelItemQuantity$;
  ExpansionpanelItemPrice$;
  key;
show = false;
  constructor(private Prescriptionservice: PrescriptionService) {

  }
 ngOnInit() {
  }
  initialiseFetch() {
    if (this.Prescription) {
      this.ExpansionPanelItemTitle$ = this.Prescription.title;
      this.ExpansionPanelItemQuantity$ = this.Prescription.quantity;
      this.ExpansionpanelItemPrice$ = this.Prescription.Price;
      this.key = this.Prescription.key;
      this.show = (this.Prescription.totalItemsCount > 0) ? true : false;
      return  (this.Prescription.items) ? true : false;
         }
   }
  checkPrescriptionexistence() { return (this.initialiseFetch()) ? true : false; }
  getTotalItems() { return this.Prescription.totalItemsCount; }
  clearAll() { this.Prescriptionservice.ClearRx(); }
}
