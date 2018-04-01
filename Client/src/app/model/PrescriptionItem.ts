import { Medicine } from './medicine';

export class PrescriptionItem {
  $key: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  get totalPrice() { return this.price * this.quantity; }
}
