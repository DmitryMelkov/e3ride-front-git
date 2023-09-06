import {Component} from '@angular/core';
import {ElectricTransportSelectComponent} from '../../blog/right-side-menu/electric-transport-select.component';
import {MyBlogLayoutComponent} from '../my-blog-layout/my-blog-layout.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {CreateLayoutComponent} from '../create-layout/create-layout.component';

@Component({
  standalone: true,
  selector: 'app-create',
  imports: [
    ElectricTransportSelectComponent,
    MyBlogLayoutComponent,
    SidebarComponent,
    CreateLayoutComponent
  ],
  template: `
    <div class="flex justify-center flex-1 mt-3">
      <div class="grid grid-flow-col gap-x-2 w-[1154px]">
        <div class="col-span-9">
          <app-create-layout></app-create-layout>
        </div>
      </div>
    </div>
  `
})
export class CreateComponent {

}
