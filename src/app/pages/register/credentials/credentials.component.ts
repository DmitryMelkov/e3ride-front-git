import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {AbstractControl, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/api/services/auth.service';
import {tap} from 'rxjs';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  @Output()
  nextStep = new EventEmitter<void>();

  authService = inject(AuthService);
  notificationService = inject(NzNotificationService);
  registerForm!: UntypedFormGroup;

  get emailFormControl(): AbstractControl {
    return this.registerForm.controls['email'];
  }

  get passwordFormControl(): AbstractControl {
    return this.registerForm.controls['password'];
  }

  submit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.getRawValue())
      .pipe(
        tap(() => {
          this.notificationService.success('Успешно', 'Вы зарегистрированы, войдите пожалуйста');
        })
      )
      .subscribe();
    // this.nextStep.emit();
  }

  ngOnInit() {
    this.registerForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.email
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
}
