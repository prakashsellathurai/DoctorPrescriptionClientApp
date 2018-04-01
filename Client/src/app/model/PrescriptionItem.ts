
export class PrescriptionItem {
  $key: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  constructor(init?: Partial<PrescriptionItem>) {
Object.assign(this , init );
  }
  get totalPrice() { return this.price * this.quantity; }
}
