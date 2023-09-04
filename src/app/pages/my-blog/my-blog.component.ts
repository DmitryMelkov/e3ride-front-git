import {Component} from '@angular/core';
import {BlogMainLayoutComponent} from '../blog/blog-main-layout/blog-main-layout.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ElectricTransportSelectComponent} from '../blog/right-side-menu/electric-transport-select.component';
import {MyBlogLayoutComponent} from './my-blog-layout/my-blog-layout.component';

@Component({
  standalone: true,
  selector: 'app-my-blog',
  imports: [
    BlogMainLayoutComponent,
    SidebarComponent,
    ElectricTransportSelectComponent,
    ElectricTransportSelectComponent,
    MyBlogLayoutComponent
  ],
  template: `
    <div class="flex justify-center flex-1 mt-3">
      <div class="grid grid-flow-col gap-x-2 w-[1154px]">
        <div class="col-span-6">
          <app-my-blog-layout></app-my-blog-layout>
        </div>
        <div class="col-span-3">
          <app-electric-transport-select></app-electric-transport-select>
        </div>
      </div>
    </div>
  `
})
export class MyBlogComponent {

}
