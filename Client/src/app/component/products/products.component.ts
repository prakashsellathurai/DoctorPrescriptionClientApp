import { Component, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { AfterViewInit } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';
import { Medicine } from '../../model/medicine';
import { Subscription } from 'rxjs/Subscription';

const initialSelection = [];
const allowMultiSelect = true;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements AfterViewInit, OnInit, OnDestroy {
selection: SelectionModel<any>;
products$;
displayedColumns = ['select', 'title', 'price', 'description'];
selectedItems: Array<any> = [];
dataSource: MatTableDataSource<any>;
subscription: Subscription;

@ViewChild(MatPaginator) paginator: MatPaginator ;
@ViewChild(MatSort) sort: MatSort;
@Input('Prescription') Prescription;
@Input('product') product: Medicine;

  constructor(
    public Productservice: ProductService,
    private Prescriptionservice: PrescriptionService) {

    this.products$ = this.Productservice.getAll()
    .subscribe(snapshot => {
    this.products$ = snapshot;
    this.dataSource = new MatTableDataSource(this.products$);
    });
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
this.Prescriptionservice.getSelecteditems().then(items => {
  console.log(items);
});
    }
   /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


getQuantity() {
  if (!this.Prescription) {
    return 0;
  }
  let item = this.Prescription.items[this.product.$key];
  return item ? item.quantity : 0 ;
}

    /** Selects all rows if they are not all selected; otherwise clear selection. */

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onSelect(product) {

    this.Prescriptionservice.addToNote(product);

  }




 async ngOnInit() {
  this.subscription = (await this.Prescriptionservice.getPrescription())
                 .subscribe(Note => this.Prescription = Note);

 }
 ngOnDestroy() {
   this.subscription.unsubscribe();
 }

}
