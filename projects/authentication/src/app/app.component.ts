import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'auth-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoginComponent],
  template: ` <router-outlet></router-outlet>`,
})
export class AuthComponent {
  title = 'authentication';
}
