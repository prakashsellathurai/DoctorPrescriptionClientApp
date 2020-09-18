import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PrescriptionService } from '../../../service/prescription.service';
@Component({
  selector: 'app-medicine-table',
  templateUrl: './medicine-table.component.html',
  styleUrls: ['./medicine-table.component.css']
})



export  class MedicineTableComponent implements OnInit {
  prescription$;
  medicines;
  @Input() items = new EventEmitter<any>();
  constructor() { }
  async ngOnInit() {
    this.medicines = await this.items;
    console.log(this.medicines)
  }

valueChanged($event) {
console.log($event);

}
generateQr() {
}
}
