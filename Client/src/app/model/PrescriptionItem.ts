import { Medicine } from './medicine';

export class PrescriptionItem {
  constructor(init) {
    init = new PrescriptionItem(init);
  }
  product: Medicine;
  quantity: number;
}
