import {Component, inject, OnInit} from '@angular/core';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {BlogService} from '../../../api/blog/blog.service';
import {map, of, tap} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-blog-main-layout',
  imports: [
    BlogItemComponent,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  template: `
    <div class="flex flex-col gap-2">
        <app-blog-item
          *ngFor="let content of blogList | async"
          [content]="content"></app-blog-item>
    </div>
  `
})
export class BlogMainLayoutComponent implements OnInit {
  private service = inject(BlogService);
  blogList = of<any>([]);

  ngOnInit() {
    this.blogList = this.service.getAll();
  }
}
