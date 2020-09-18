import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';
import { MyPrescriptionService } from '../../service/myprescription.service';
import { AuthService } from '../../service/auth.service';
import { MyPrescription } from '../../model/myprescription';


@Component({
  selector: 'app-myprescriptions',
  templateUrl: './myprescriptions.component.html',
  styleUrls: ['./myprescriptions.component.css']
})
export class MyprescriptionsComponent implements OnInit {
transaction$;
qr: Array<MyPrescription> = [];
items = [];
  constructor(
    private auth: AuthService,
    private Prescriptionservice: PrescriptionService,
    private my: MyPrescriptionService
  ) {
   this.transaction$ =  auth.user$.switchMap(u => my.getQrByDoc(u.uid) ).subscribe(val => {

  val.forEach(element => {
    this.qr.push(element);
  });
  console.log(this.qr);
  this.qr.forEach(element => {
    this.items.push(element.items);
  });
  console.log(this.items);
      return this.qr;

    });
   }

  ngOnInit() {
  }

}


