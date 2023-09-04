import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuillEditorComponent} from 'ngx-quill';
import {FormsModule} from '@angular/forms';
import {BlogService} from '../../../api/blog/blog.service';
import {Router} from '@angular/router';
import {NzNotificationModule, NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  standalone: true,
  selector: 'app-create-layout',
  imports: [CommonModule, QuillEditorComponent, FormsModule, NzNotificationModule],
  template: `
    <div class="flex flex-col gap-2">
      <input
        [(ngModel)]="title"
        class="h-10 text-2xl outline-none px-2"
        type="text"
        placeholder="Введите название электрозаписи">
      <quill-editor
        format="json"
        [(ngModel)]="quillData"></quill-editor>
      <button
        class="bg-amber-200"
        (click)="submit()">Сохранить
      </button>
    </div>
  `
})
export class CreateLayoutComponent {
  protected quillData = '';
  protected title = '';
  private blogService = inject(BlogService);
  private notificationService = inject(NzNotificationService);
  private router = inject(Router);

  submit() {
    this.blogService.createBlog({
      title: this.title,
      text: this.quillData
    })
      .subscribe(() => {
        this.notificationService.success('Успешно', 'Электрозапись успешно создана!')
        this.router.navigate(['../myBlog']);
      });
  }
}
