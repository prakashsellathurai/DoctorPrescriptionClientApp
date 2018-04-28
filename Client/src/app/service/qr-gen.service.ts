import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { PrescriptionService } from './prescription.service';

@Injectable()
export class QrGenService {
key: string;
  constructor(private db: AngularFireDatabase , private prescriptionservice: PrescriptionService) { }
async storeQr(qr) {
  const result =  await this.db.list('/qr').push(qr);
  if(result) {
    this.key = result.key;
    //console.log(this.key);
    this.prescriptionservice.ClearRx();
    return this.key ;
  }

}



}
