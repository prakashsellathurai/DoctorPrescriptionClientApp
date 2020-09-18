import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventEmitter } from 'events';
import { QrGenService } from '../../../service/qr-gen.service';
import { Qr } from '../../../model/qr';

@Component({
  selector: 'qr-report',
  templateUrl: './qr-report.component.html',
  styleUrls: ['./qr-report.component.css']
})
export class QrReportComponent implements OnChanges,OnInit {
@Input() details=new EventEmitter();
Doctor = localStorage.getItem('user');
qrDetail$;
patientName;
gender;
uuid;
DiagnosedDisease;

  constructor( private qrService: QrGenService
  ) { }

  ngOnInit() {
    this.qrService.getQr(this.details).subscribe(val =>{
    this.qrDetail$ = val;
    console.log(this.qrDetail$)
    })
  }
ngOnChanges() {

  }

}
