import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public angularFireAuth: AngularFireAuth) {
    this.user$ = angularFireAuth.authState;
  }
isAdmin() {

}
login() {
  this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

logout() {
this.angularFireAuth.auth.signOut();
}
}
