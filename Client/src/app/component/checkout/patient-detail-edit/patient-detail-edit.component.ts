import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-detail-edit',
  templateUrl: './patient-detail-edit.component.html',
  styleUrls: ['./patient-detail-edit.component.css']
})
export class PatientDetailEditComponent implements OnInit , OnChanges {
  PatientDetail = {};
  form: FormGroup;
  @Output() patientDetailEdit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group(this.PatientDetail);
   }
ngOnChanges() {

}
  ngOnInit() {
  }


  valueChanged(formvalue) {
   this.patientDetailEdit.emit(formvalue);
  }
  placeOrder() {
    console.log(this.PatientDetail);
  }
}
