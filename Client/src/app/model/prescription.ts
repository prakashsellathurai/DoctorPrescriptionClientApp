import { PrescriptionItem } from './PrescriptionItem';
import { Medicine } from './medicine';

export class Prescription {
    items: PrescriptionItem[] = [];
constructor(public itemsMap: { [productId: string]: PrescriptionItem }) {
    this.itemsMap = itemsMap || {};
    // tslint:disable-next-line:forin
    for (const productId in itemsMap) {
        const item = itemsMap[productId];
        this.items.push(new PrescriptionItem({...item, $key: productId}));
        }
    }

get totalPrice() {
    let sum = 0;
// tslint:disable-next-line:forin
  for (const productId in this.items) { sum += this.items[productId].totalPrice; }
  return sum;
}

getQuantity(produtct: Medicine) {
    const item = this.itemsMap[produtct.$key];
    return item ? item.quantity : 0;
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
     title.push(this.items[productId].title);
    }
    return title;
 }
get ItemTitleAndQuantity() {
    const ItemArray = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
      ItemArray.push(
          {
            title: this.items[productId] ,
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
     price.push(this.items[productId].price);
    }
    return price;
}
get key() {
    const $key = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     $key.push(this.items[productId].$key);
    }
    return $key;
}

get products() {
    const product = [];
    // tslint:disable-next-line:forin
    for (const productId in this.items) {
     // tslint:disable-next-line:no-unused-expression
     product.push(this.items[productId]);
    }
    return product;
}
}
