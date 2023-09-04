import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {BlogMainLayoutComponent} from './blog-main-layout/blog-main-layout.component';
import {ElectricTransportSelectComponent} from './right-side-menu/electric-transport-select.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, BlogMainLayoutComponent, ElectricTransportSelectComponent],
  template: `
    <div class="flex justify-center flex-1 mt-3">
      <div class="grid grid-flow-col gap-x-2 w-[1154px]">
        <div class="col-span-6">
          <app-blog-main-layout></app-blog-main-layout>
        </div>
        <div class="col-span-3">
          <app-electric-transport-select></app-electric-transport-select>
        </div>
      </div>
    </div>
  `
})
export class BlogComponent {

}
