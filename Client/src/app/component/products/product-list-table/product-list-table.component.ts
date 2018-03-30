import { Component, ViewChild,  AfterViewInit, Input } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { PrescriptionService } from '../../../service/prescription.service';
import { ProductService } from '../../../service/product.service';
import { MatTableDataSource } from '@angular/material/table';


const initialSelection = [];
const allowMultiSelect = true;

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.css']
})
export class ProductListTableComponent  {
 

  products$;
  displayedColumns = ['select', 'title', 'price', 'description'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator ;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public Productservice: ProductService,
    private Prescriptionservice: PrescriptionService,

  ) {
    this.products$ = this.Productservice.getAll()
    .subscribe(snapshot => {
    this.products$ = snapshot;
    this.dataSource = new MatTableDataSource(this.products$);
    });
  }
  // tslint:disable-next-line:no-trailing-whitespace
 

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


   onSelect(product) {
    this.Prescriptionservice.addToNote(product);
   }

}
