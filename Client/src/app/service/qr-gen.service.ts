import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { PrescriptionService } from './prescription.service';

@Injectable()
export class QrGenService {

  constructor(private db: AngularFireDatabase , private prescriptionservice: PrescriptionService) { }
async storeQr(qr) {
  const result =  await this.db.list('/qr').push(qr);
  this.prescriptionservice.ClearRx();
  return result;
}



}
