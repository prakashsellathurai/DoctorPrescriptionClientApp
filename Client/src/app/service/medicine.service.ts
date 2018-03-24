import { Injectable } from '@angular/core';
import { Medicine } from '../model/medicine';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicineService {
  medicines: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    
  }

  save(medicine: Medicine) {
  return this.db.object('/medicines/' + medicine.name).update(
    {
      name: medicine.name,
      description: medicine.description,
      price: medicine.price,
      imageUrl: medicine.imageurl
    }
  );
}
/*
getAll() {
  return this.db.list('/medicines/', ref => ref );
} */
delete(medicine: Medicine) {
 return this.db.object('/medicines/' + medicine.name).remove();
}
}
