import { Injectable } from '@angular/core';
import { AppUser } from '../model/user';
import * as firebase from 'firebase';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database';
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
savelocal(userObject: firebase.User) {
   this.get(userObject.uid).subscribe(user => {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  });
 
}
get(uid: string ): FirebaseObjectObservable<AppUser> {
 return this.db.object('/users/' + uid);
}
}