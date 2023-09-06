import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from './api/services/auth.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  service = inject(AuthService);
  notificationService = inject(NzNotificationService);
  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  submit() {
    this.service.signIn(this.authForm.getRawValue()).subscribe()
  }
}
