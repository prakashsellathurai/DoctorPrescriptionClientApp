import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MyPrescriptionService {

  constructor(private db: AngularFireDatabase) { }
  getAllQr() {
return this.db.list('/qr/');
  }
getQrByDoc(userId: string) {
  return this.db.list('/qr', {
    query: {
      orderByChild: 'userId',
      equalTo: userId
    }
  });
}
}
