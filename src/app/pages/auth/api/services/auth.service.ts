import {inject, Injectable} from '@angular/core';
import {catchError, Observable, of, ReplaySubject, tap} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Injectable({providedIn: 'root'})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private notificationService = inject(NzNotificationService);
  private isAuthenticatedStream = new ReplaySubject<boolean>(1);
  private userStream = new ReplaySubject<any>(1);

  init(): void {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.userStream.next(JSON.parse(user));
      this.isAuthenticatedStream.next(true);
    }
  }

  register(dto: any): Observable<any> {
    return this.http.post('auth/register', dto)
      .pipe(
        tap(() => {
          this.router.navigate(['auth']);
        })
      );
  }

  signIn(dto: any): Observable<any> {
    return this.http.post('auth/signIn', dto)
      .pipe(
        tap((value: any) => {
          localStorage.setItem('token', value.token);
          localStorage.setItem('user', JSON.stringify(value.user));
          this.userStream.next(value.user);
          this.isAuthenticatedStream.next(true);
          this.router.navigate(['blog']);
          this.notificationService.success('Успешно', 'Вход выполнен успешно');
        }),
        catchError((err: HttpErrorResponse) => {
          this.notificationService.error('Ошибка', err.error.message);
          return of(err);
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.isAuthenticatedStream.next(false);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedStream.asObservable();
  }

  get user(): Observable<any> {
    return this.userStream.asObservable();
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }
}
