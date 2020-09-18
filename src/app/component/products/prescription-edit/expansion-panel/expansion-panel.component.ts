import { Component, OnInit, Input } from '@angular/core';
import { PrescriptionService} from '../../../../service/prescription.service';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
@Input('ExpansionPanelItemTitle$') ExpansionPanelItemTitle$;
@Input('ExpansionPanelItemQuantity$') ExpansionPanelItemQuantity$;
  constructor(private Prescriptionservice: PrescriptionService) { }

  ngOnInit() { }

fetchItems() {
  return this.ExpansionPanelItemTitle$;
}
onSelect(title) {
  this.Prescriptionservice.addTitle(title);
 }
 OnDelete(title) {
   this.Prescriptionservice.removeTitle(title);
 }
}
