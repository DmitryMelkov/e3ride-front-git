import {inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../injection-tokens/api-url.token';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private apiUrl = inject(API_URL);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('assets')) {
      return next.handle(req)
    }
    const apiReq = req.clone({url: this.apiUrl + req.url});
    return next.handle(apiReq);
  }
}
