import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private userService: UserService, private auth: AuthService, router: Router) {
auth.user$.subscribe(user => {
  if (!user) { return; }
  userService.saveUser(user);

  let returnUrl = localStorage.getItem('returnUrl');

  if (!returnUrl) { return; }

  if (returnUrl) {
    localStorage.removeItem('returnUrl');
    router.navigateByUrl(returnUrl);
  }
  
});
}
}
