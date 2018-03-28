import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';


@Component({
  selector: 'app-myprescriptions',
  templateUrl: './myprescriptions.component.html',
  styleUrls: ['./myprescriptions.component.css']
})
export class MyprescriptionsComponent implements OnInit {

  constructor(
    private Prescriptionservice: PrescriptionService
  ) {
   }

  ngOnInit() {
  }

}
