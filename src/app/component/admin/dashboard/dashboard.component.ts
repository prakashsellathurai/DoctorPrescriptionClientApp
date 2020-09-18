import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dash-board.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
numberOFDevices = 0;
numberOfDevicesOnline = 0;
TotslNumberOfUsers = 0;
usersList = [];
medicines = [];
number_of_medicines_available = 0;
device$;
medicines$ = [];



constructor(private dashboard: DashboardService) { }

async ngOnInit() {
    await this.dashboard.getDevices().subscribe(val => {
     this.numberOFDevices =  val.length;
     val.forEach(element => {
      if (element.availability === 'online') {
      this.numberOfDevicesOnline += 1;
      this.number_of_medicines_available += element.totalItems;
      } else {
        if (this.numberOfDevicesOnline > 0) {
          this.numberOfDevicesOnline -= 1;
        }
      }
      this.medicines$.push(element.medicines);
     });
    console.log(val);
    this.device$ =  val;
    });
    await this.dashboard.getUsers().subscribe(users => {
   users.forEach(user => {
    this.usersList.push(user);
   });
   this.TotslNumberOfUsers = this.usersList.length;
  });


  }

}
