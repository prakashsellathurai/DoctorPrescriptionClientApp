import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DashboardService {

  constructor(private db: AngularFireDatabase) { }
public getDevices() {
  return this.db.list('/devices');
}
public getUsers() {
  return this.db.list('/users');
}
public getmedicines(deviceId) {
  return this.db.list('/devices/' + deviceId + 'medicines');
}
}
