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
            title: this.items[productId].product ,
            quantity: this.items[productId].quantity
         }
        );
    }
    return ItemArray;
}
get quantity() {
    const quantity = [];
   // tslint:disable-next-line:forin
   for (const productId in this.items) {
    // tslint:disable-next-line:no-unused-expression
    quantity.push(this.items[productId].quantity);
   }
   return quantity;
}
getItemQuantity(productId) {
    return this.items['items' + productId].quantity;
}
get Price() {
    const price = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     price.push(this.items[productId].product.price);
    }
    return price;
}
get key() {
    const $key = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     $key.push(this.items[productId].product.$key);
    }
    return $key;
}

get products() {
    const product = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     product.push(this.items[productId].product);
    }
    return product;
}
}
