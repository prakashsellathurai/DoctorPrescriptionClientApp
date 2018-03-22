import { Injectable } from '@angular/core';
import { User } from '../model/user';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
// import FirebaseObjectObservable as  FirebaseObjectObservable from 'angularfire2/database';
@Injectable()
export class UserService {
constructor(private db: AngularFireDatabase) { }
saveUser(user: firebase.User) {
  this.db.object('/users/' + user.uid ).update(
    {
      name: user.displayName,
      email: user.email
    }
  );
}
getUser(uid: string ) {
 return this.db.object('/users/' + uid);
}
deleteUser(uid: string) {
 return this.db.object('/users/' + uid).remove();
}
updateUser(user: firebase.User) {
 this.db.object('/users/' + user.uid ).update({
   isAdmin: true
 });
}
getUid(user: firebase.User) {
// return this.db.list('/users/', res => res.orderByChild('name').equalTo(user.displayName)).snapshotChanges();
}

}
 