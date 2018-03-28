import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Medicine } from '../model/medicine';
import 'rxjs/add/operator/take';
import { Prescription } from '../model/prescription';

@Injectable()
export class PrescriptionService {
selectedItems: any[] = [];
  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/Prescriptions').push({
      dateCreated : new Date().getTime()
    });
  }

  private getItem(prescriptionId: string, productId: string) {
  return this.db.object('/Prescriptions/' + prescriptionId + '/items' + productId);
  }

  async getPrescription(): Promise<FirebaseObjectObservable<Prescription>> {
    let Id = await this.GetOrCreatePrescriptionId();
       return this.db.object('/Prescriptions/' + Id);
  }

  private async GetOrCreatePrescriptionId(): Promise<string> {
    let prescriptionId = localStorage.getItem('PrescriptionId');
    if (prescriptionId) {   return prescriptionId;
    }

    let result = await this.create();
    localStorage.setItem('PrescriptionId', result.key);
    return result.key;
  }



 async addToNote(product: Medicine) {
    let prescriptionId  = await this.GetOrCreatePrescriptionId();
    let item$ = this.getItem(prescriptionId, product.$key);
     item$.take(1).subscribe(item => {
        item$.set({product: product , quantity: (item.quantity || 0) + 1});
     });

  }

  async getSelecteditems() {
    let Id = await this.GetOrCreatePrescriptionId();
    return this.db.object('/Prescriptions/' + Id).switchMap(items => {
      this.selectedItems = items;
      return this.selectedItems;
    });
  }
}
