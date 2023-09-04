import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {DatePipe, NgIf, NgOptimizedImage} from '@angular/common';
import {QuillViewComponent} from 'ngx-quill';
import {AuthService} from '../../../auth/api/services/auth.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-blog-item',
  imports: [
    NgOptimizedImage,
    QuillViewComponent,
    NgIf,
    DatePipe
  ],
  template: `
    <div class="flex flex-col gap-3 box-shadow px-4 py-3 rounded-lg">
      <div class="flex gap-2 justify-between">
        <div class="flex gap-2">
          <img
            ngSrc="assets/avatars/avatar1.jpg"
            width="100"
            height="100"
            class="rounded">
          <div class="flex flex-col">
            <span class="font-bold text-xl">{{content.user.email}}</span>
            <span class="">Записи из электрожурналов Ninebot Max (G30, G30P...)</span>
            <span class="font-thin">{{content.updatedAt | date: 'medium'}}</span>
          </div>
        </div>
        <div class="flex items-center">
          <ng-container *ngIf="currentUserId && currentUserId !== content.user.id">
            <button class="px-6 py-1 bg-amber-300 rounded-xl font-bold text-gray-600">
              Подписаться
            </button>
          </ng-container>
        </div>
      </div>
      <div class="flex flex-col gap-2 px-1">
        <span class="self-center font-bold text-xl text-gray-500">{{content.title}}</span>
        <quill-view
          format="json"
          [content]="content.text"></quill-view>
      </div>
      <div class="flex justify-between px-1">
        <div class="flex gap-4">
          <div class="flex gap-1 items-center">
            <img src="assets/icons/like.svg">
            <span>15</span>
          </div>
          <div class="flex gap-1 items-center">
            <img src="assets/icons/comment.svg">
            <span>22</span>
          </div>
          <div class="flex items-center">
            <img src="assets/icons/bookmark.svg">
          </div>
          <div class="flex items-center">
            <img src="assets/icons/share.svg">
          </div>
        </div>
        <div class="flex gap-1 items-center text-gray-400">
          <img
            src="assets/icons/eye.svg">
          <span class="text-gray">22</span>
        </div>
      </div>
    </div>
  `
})
export class BlogItemComponent implements OnInit, OnDestroy{
  @Input() content: any;
  private authService = inject(AuthService);
  currentUserId = null;
  unSubscriber = new Subject<void>()

  ngOnInit() {
    this.authService.user
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(value => this.currentUserId = value.id)
  }

  ngOnDestroy() {
    this.unSubscriber.next();
    this.unSubscriber.complete();
  }
}
