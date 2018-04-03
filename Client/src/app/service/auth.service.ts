import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../model/user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public angularFireAuth: AngularFireAuth , private route: ActivatedRoute , private Userservice: UserService) {
    this.user$ = angularFireAuth.authState;
  }
isAdmin() {

}
login() {
const returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
localStorage.setItem('returnUrl', returnUrl);
  this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

logout() {
this.angularFireAuth.auth.signOut();
}
get appuser$(): Observable<AppUser> {
  return this.user$
  .switchMap( user => {
    if (user) { return this.Userservice.get(user.uid); }
  return Observable.of(null);
  });
}
}
