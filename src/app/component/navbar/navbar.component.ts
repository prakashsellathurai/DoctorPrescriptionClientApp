import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../../model/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appuser$.subscribe(appUser => {
       this.appUser = appUser;
       if(this.appUser) {
        localStorage.setItem('user', this.appUser.name);
       }
      
      });
  }



  ngOnInit() {
   }
logout() {
  localStorage.removeItem('user');
  this.auth.logout();
}
}
