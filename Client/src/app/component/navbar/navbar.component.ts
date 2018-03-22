import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user$: Observable<firebase.User>;
  constructor(private angularfireauth: AuthService) {
    this.user$ = angularfireauth.user$;
  }

  ngOnInit() {
  }
logout() {
  this.angularfireauth.logout();
}
}
