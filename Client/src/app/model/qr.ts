import { Prescription } from './prescription';
export class Qr {
 datePlaced: number;
 items: any[] = [];
constructor(public userId: string, public patient_details: any, public prescription: Prescription) {
this.datePlaced = new Date().getTime();
this.items = this.prescription.items.map(i => {
    return {
      product: {
        title: i.title,
        description: i.description,
        price: i.price
      },
     quantity: i.quantity,
     totalPrice: i.totalPrice
    };
        });
}
}
