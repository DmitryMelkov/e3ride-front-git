import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AngularSvgIconModule} from "angular-svg-icon";
import {SVG_ICONS} from "../../common/injection-tokens/svg-icons.token";

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink,
    AngularSvgIconModule,
    RouterLinkActive,
  ],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  svgIconsBasePath = inject(SVG_ICONS)
}
