import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../pages/auth/api/services/auth.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {AngularSvgIconModule} from "angular-svg-icon";
import {SVG_ICONS} from "../common/injection-tokens/svg-icons.token";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, AngularSvgIconModule],
  standalone: true,
  template: `
    <header class="header">
      <div class="container header__container">
        <div class="header__logo">
          <div class="header__logo-img">
            <img src="./assets/img/logo.png" alt="img-logo">
          </div>
          <img src="./assets/img/logo-2.svg" alt="img-logo">
        </div>
        <div class="header__search">
          <input class="header__input" type="text" placeholder="Поиск...">
          <div class="header__search-inner">
            <button class="header__close-btn btn-reset">
              <svg-icon class="header__close-svg" [src]="svgIconsBasePath + 'search-close.svg'"></svg-icon>
            </button>
            <button class="header__search-btn btn-reset">
              <svg-icon class="header__search-svg" [src]="svgIconsBasePath + 'search.svg'"></svg-icon>
            </button>
          </div>

        </div>
        <div class="header__admin">
          <button class="header__admin-btn header__messages btn-reset">
            <img class="header__admin-img" src="./assets/img/messages.svg" alt="messages-img">
          </button>
          <button class="header__admin-btn header__notifications btn-reset">
            <img class="header__admin-img" src="./assets/img/notifications.svg" alt="notifications-img">
          </button>
          <button class="header__admin-btn header__settings btn-reset">
            <img class="header__admin-img" src="./assets/img/settings.svg" alt="settings-img">
          </button>
          <button class="header__admin-btn header__avatar btn-reset">
            <img class="header__admin-avatar" src="./assets/img/av-1.jpg" alt="avatar-img">
          </button>
        </div>
      </div>
    </header>
<!--    <div class="flex justify-center h-[50px] bg-black w-full">-->
<!--      <div class="flex justify-between text-white w-[1154px] min-w-[1154px]">-->
<!--        <a routerLink="/">-->
<!--          <div class="flex items-center justify-center h-[50px] w-[120px] bg-[#FFCC00] uppercase">-->
<!--            <p class="text-black text-[20px] ml-[100px]">E3Ride.ru</p>-->
<!--             <img class="h-[50px] ml-[20px]" src="../../assets/logo/logo-e3.svg" alt="E3Ride.ru Logo">-->
<!--          </div>-->
<!--        </a>-->
<!--        <div class="flex text-white items-center">-->
<!--          <ng-container *ngIf="isAuthenticated | async; else authTemplate">-->
<!--            <div class="flex items-center gap-5">-->
<!--              <button class="bg-[#424242] hover:bg-[#FFCC00] active:bg-[#FFCC00] h-[36px] px-10 rounded-lg text-[20px] font-oswald">-->
<!--                <ng-container *ngIf="user | async as t">-->
<!--                  {{t.email}}-->
<!--                </ng-container>-->
<!--              </button>-->
<!--              <button class="bg-[#424242] hover:bg-[#FFCC00] active:bg-[#FFCC00] h-[36px] px-10 rounded-lg text-[20px] font-oswald">-->
<!--                <button (click)="logout()">-->
<!--                  <a href="logout" class="text-white hover:text-black font-oswald">Выйти</a>-->
<!--                </button>-->
<!--              </button>-->
<!--            </div>-->
<!--          </ng-container>-->
<!--          <ng-template #authTemplate>-->
<!--            <div class="flex items-center gap-5">-->
<!--                <button class="bg-[#424242] hover:bg-[#FFCC00] active:bg-[#FFCC00] h-[36px] px-10 rounded-lg text-[20px] font-oswald">-->
<!--                    <a routerLink="auth" class="text-white hover:text-black font-oswald">Войти</a>-->
<!--                </button>-->
<!--                <button class="bg-[#424242] hover:bg-[#FFCC00] active:bg-[#FFCC00] h-[36px] px-10 rounded-lg text-[20px] font-oswald">-->
<!--                    <a routerLink="register" class="text-white hover:text-black font-oswald">Зарегистрироваться</a>-->
<!--                </button>-->
<!--            </div>-->
<!--          </ng-template>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  `
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private notificationService = inject(NzNotificationService);
  protected isAuthenticated = this.authService.isAuthenticated;
  protected user = this.authService.user;
  private router = inject(Router);
  svgIconsBasePath = inject(SVG_ICONS)

  logout() {
    this.authService.logout();
    this.notificationService.success('Успешно', 'Вы вышли из аккаунта');
    this.router.navigate(['/start']);
  }
}
