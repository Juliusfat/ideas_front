import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/'],
      icon: 'fa fa-home'
    },
    {
      label: 'Ideas',
      routerLink: ['/ideas']
    },
    {
      label: 'Users',
      routerLink: ['/users']
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onClick() {
    if (this.authService.token) {
      this.authService.saveToken(null);
    }
    this.router.navigate(['/auth']);
  }
}
