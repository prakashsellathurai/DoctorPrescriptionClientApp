import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../../model/prescription';
import { Subscription } from 'rxjs/Subscription';
import { QrGenService } from '../../service/qr-gen.service';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printpage',
  templateUrl: './printpage.component.html',
  styleUrls: ['./printpage.component.css']
})
export class PrintpageComponent implements OnInit , OnDestroy {
  prescription: Prescription;
  subscription: Subscription;
  usersubscription: Subscription;
  routesubscription: Subscription;
  userId: string;
  patient_details;
  qrString: string;
  constructor(
    private prescriptionservice: PrescriptionService,
    private qrService: QrGenService,
    private authservice: AuthService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    const prescription = await this.prescriptionservice.getPrescription();
    // tslint:disable-next-line:no-shadowed-variable
    this.subscription = await prescription.subscribe(prescription => {
       this.prescription = prescription;
       this.usersubscription = this.authservice.user$.subscribe(user => {
         this.userId = user.uid;
         this.routesubscription = this.route.params.subscribe(params => {
            this.patient_details = params;
             console.log(this.userId);
              this.createQr();
          });
        });

        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.usersubscription.unsubscribe();
    this.routesubscription.unsubscribe();
  }
  createQr() {
    const qr = {
      userId: this.userId,
      dateplaced: new Date().getTime(),
      patient_details: this.patient_details,
      items: this.prescription.items.map(i => {
      return {
    product: {
      title: i.title,
      description: i.description,
      price: i.price
    },
   quantity: i.quantity,
   totalPrice: i.totalPrice
  };
      })
    };

const result = this.qrService.storeQr(qr);
if (result) {
  console.log(result);
  this.qrString = JSON.stringify(qr);
}
  }

}
