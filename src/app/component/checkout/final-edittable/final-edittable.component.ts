import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrescriptionService } from '../../../service/prescription.service';

@Component({
  selector: 'app-final-edittable',
  templateUrl: './final-edittable.component.html',
  styleUrls: ['./final-edittable.component.css']
})
export class FinalEdittableComponent implements OnInit {
  prescription$;
  @Output() items = new EventEmitter<any>();
  constructor(private Prescriptionservice: PrescriptionService) { }
  async ngOnInit() {
    this.prescription$ = await this.Prescriptionservice.getPrescription();
    const items = await  this.prescription$.items; /* .map(i => {
      return {
        product: {
          title: i.title,
          description: i.description,
          price: i.price
        },
       quantity: i.quantity,
       totalPrice: i.totalPrice
      };
          }); */
  }
  clearRx() {
  this.Prescriptionservice.ClearRx();
}
valueChanged($event) {
console.log($event);

}
generateQr() {
}
}
