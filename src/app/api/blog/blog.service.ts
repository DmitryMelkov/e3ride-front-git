import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BlogService {
  private http = inject(HttpClient);

  createBlog(blog: {title: string, text: string}): Observable<any> {
    return this.http.post('blog', blog);
  }

  getAll(): Observable<any> {
    return this.http.get('blog');
  }

  getMyBlog(): Observable<any> {
    return this.http.get('blog/me');
  }
}
