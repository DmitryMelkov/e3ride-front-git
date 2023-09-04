import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from './pages/auth/api/services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="page">
      <div>
        <app-header></app-header>
        <main class="main">
          <div class="container intro-container">
            <app-sidebar></app-sidebar>
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.init();
  }
}
