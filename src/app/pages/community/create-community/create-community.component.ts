import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVG_ICONS } from '../../../common/injection-tokens/svg-icons.token';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-create-community',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss'],
})
export class CreateCommunityComponent {
  svgIconsBasePath = inject(SVG_ICONS);
}
