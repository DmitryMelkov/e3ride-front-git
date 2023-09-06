import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__top">
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <a class="footer__menu-link" href="#">Условия использования</a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link" href="#"
                >Политика конфиденциальности
              </a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link" href="#">Реклама</a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link" href="#">Контакты</a>
            </li>
          </ul>
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-img"
                  src="./assets/img/telegram.svg"
                  alt="telegram-img"
                />
              </a>
            </li>
            <li class="footer__social-item">
              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-img"
                  src="./assets/img/vk.svg"
                  alt="vk-img"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          <div class="footer__logo">Site3.ru, 2023</div>
          <ul class="footer__download-list">
            <li class="footer__download-item">
              <a class="footer__download-link" href="#">
                <img
                  src="./assets/img/googleplay.png"
                  alt="download-img"
                  class="footer__download-img"
                />
              </a>
            </li>
            <li class="footer__download-item">
              <a class="footer__download-link" href="#">
                <img
                  src="./assets/img/appstore.png"
                  alt="download-img"
                  class="footer__download-img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <!-- <div class="flex justify-center items-center gap-2 h-[100px] bg-black text-white w-full">
        <div>
            <div class="flex gap-3 items-center">
              <span class="text-[16px] font-oswald">
            <a href="#">Условия использования</a>
              </span>
              <span class="text-[16px] font-oswald">
                <a href="#">Политика конфиденциальности</a>
              </span>
              <span class="text-[16px] font-oswald">
                <a href="#">Реклама</a>
              </span>
              <span class="text-[16px] font-oswald">
                <a href="#">Контакты</a>
              </span>
            <span class="ml-[100px]">
              <a
                href="https://t.me/Kos2an"
                class="underline"><img src="./../../assets/icons/telega.png" alt=""></a>
             </span>
                <span class="w-[42px]">
              <a
                href="https://t.me/Kos2an"
                class="underline"><img src="./../../assets/icons/vk.png" alt=""></a>
            </span>
          </div>
          <div class="my-[6px] font-oswald">
            <span>
              E3Ride.ru Electric Free Ride. 2023
            </span>
          </div>
        </div>
    </div> -->
  `,
})
export class FooterComponent {}
