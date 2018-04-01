import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../service/prescription.service';

@Component({
  selector: 'app-final-edittable',
  templateUrl: './final-edittable.component.html',
  styleUrls: ['./final-edittable.component.css']
})
export class FinalEdittableComponent implements OnInit {
  prescription$;
  constructor(private Prescriptionservice: PrescriptionService) { }
  async ngOnInit() {
    this.prescription$ = await this.Prescriptionservice.getPrescription();
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
