import { PrescriptionItem } from './PrescriptionItem';

export class Prescription {
constructor(public items: PrescriptionItem[]) {
}
get productIds() {
    return Object.keys(this.items);
     }
 get totalItemsCount() {
     let count = 0;
     // tslint:disable-next-line:forin
     for (const productId in this.items) {
         count += this.items[productId].quantity;
     }
     return count;
 }
 get title() {
     const title = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     title.push(this.items[productId].product.title);
    }
    return title;
 }
get ItemTitleAndQuantity() {
    const ItemArray = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
      ItemArray.push(
          {
            title: this.items[productId].product.title ,
            quantity: this.items[productId].quantity
         }
        );
    }
    return ItemArray;
}


}
