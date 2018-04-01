import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Medicine } from '../model/medicine';
import 'rxjs/add/operator/take';
import { Prescription } from '../model/prescription';
import { Observable } from 'rxjs/Observable';
import { PrescriptionItem } from '../model/PrescriptionItem';

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

  async getPrescription(): Promise<Observable<Prescription>> {
    const Id = await this.GetOrCreatePrescriptionId();
       return this.db.object('/Prescriptions/' + Id)
       .map(x => {
        const prescription =  new Prescription(x);
        return prescription;
       });
  }

  private async GetOrCreatePrescriptionId(): Promise<string> {
    const prescriptionId = localStorage.getItem('PrescriptionId');
    if (prescriptionId) {   return prescriptionId;
    }

    const result = await this.create();
    localStorage.setItem('PrescriptionId', result.key);
    return result.key;
  }


private async updateItem(product: Medicine, change: number) {
  const prescriptionId  = await this.GetOrCreatePrescriptionId();
  const item$ = this.getItem(prescriptionId, product.$key);
   item$.take(1).subscribe(item => {
       const quantity = (item.quantity || 0) + change;
       if (quantity === 0 || quantity < 0) { item$.remove(); } else {
      item$.set({
        // product: product
        title: product.title,
        price: product.price,
        description: product.description,
        quantity: quantity});
       }
   });
}



  async getSelecteditems() {
    const Id = await this.GetOrCreatePrescriptionId();
    return this.db.object('/Prescriptions/' + Id).subscribe(items => {
      return items;
    });
  }

getAllProducts() {
return  this.db.list('/products/', { preserveSnapshot: true});
}

UpdatePrescriptionByRawTitle(title: string , change: number) {
  const products = [];
  this.getAllProducts().subscribe(snapshots => {
 snapshots.forEach(snapshot => { products.push({ key: snapshot.key, value : snapshot.val()}); } );
 this.getProductbytitle(products, title).subscribe(product => this.updateItem(product , change));
});

}


  getProductbytitle(products , title) {
    const findProduct = products.find(element => element.value.title === title);
   return  this.db.object('/products/' + findProduct.key);
  }
  async removefromNote(product: Medicine) { this.updateItem(product , -1); }

  async addToNote(product: Medicine) { this.updateItem(product , 1); }

  addTitle(title) { this.UpdatePrescriptionByRawTitle(title , 1); }

  removeTitle(title) { this.UpdatePrescriptionByRawTitle(title , -1); }
}
