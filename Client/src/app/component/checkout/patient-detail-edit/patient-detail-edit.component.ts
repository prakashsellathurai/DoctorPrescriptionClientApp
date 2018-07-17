import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-detail-edit',
  templateUrl: './patient-detail-edit.component.html',
  styleUrls: ['./patient-detail-edit.component.css']
})
export class PatientDetailEditComponent  {
  PatientDetail = {
    name: '',
    dob: '',
    gender: '',
    DiagnosedDisease:''

  };
  form: FormGroup;
  @Output() patientDetailEdit = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group(this.PatientDetail);
   }
  valueChanged(formvalue) {
    this.PatientDetail = formvalue;
   this.patientDetailEdit.emit(formvalue);
  }
  placeOrder() {
    console.log(this.PatientDetail);
  }
  getgender(gender) {
  this.PatientDetail.gender = gender;
  this.valueChanged(this.PatientDetail);
  }
  getDate(date) {
 this.PatientDetail.dob = date;
 this.valueChanged(this.PatientDetail);
  }
}
