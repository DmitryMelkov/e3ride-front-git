import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../../components/header.component';
import {FooterComponent} from '../../components/footer.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  logos = [
    './assets/logo/ninebot.svg',
    './assets/logo/inmoution.svg',
    './assets/logo/mi.svg',
    './assets/logo/kugoo.svg',
    './assets/logo/dualtron.svg',
    './assets/logo/halten.svg',
    './assets/logo/kingsone.svg',
  ]
  models = [
    'Acer',
    'Digma',
    'Hiper',
    'Kugoo',
    'Syccyba',
    'Yokamura',
    'Aowo',
    'Dualtron',
    'Inmotion',
    'Midway',
    'Ultron',
    'Citycoco',
    'Currus',
    'Electroway',
    'Inokim',
    'Ninebot',
    'WhiteSiberia',
    'Другие',
    'Dualtron',
    'Halten',
    'Kingsong',
    'Speedway',
    'Xiaomi',
    'Самоделки',
  ];


  ngOnInit() {
    console.log(this.models.length);
  }
}
