import {Component, inject, OnInit} from '@angular/core';
import {BlogItemComponent} from '../../blog/blog-main-layout/blog-item/blog-item.component';
import {RouterLink} from '@angular/router';
import {of} from 'rxjs';
import {BlogService} from '../../../api/blog/blog.service';
import {AsyncPipe, NgForOf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-my-blog-layout',
  imports: [
    BlogItemComponent,
    RouterLink,
    NgForOf,
    AsyncPipe
  ],
  template: `
    <div class="flex flex-col gap-2">
      <button class="bg-amber-200">
        <a routerLink="../create">Добавить запись</a>
      </button>
      <app-blog-item
        *ngFor="let item of blogList | async"
        [content]="item"></app-blog-item>
    </div>
  `
})
export class MyBlogLayoutComponent implements OnInit {
  blogList = of<any>([]);
  private service = inject(BlogService);

  ngOnInit() {
    this.blogList = this.service.getMyBlog()
  }
}
