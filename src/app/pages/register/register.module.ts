import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';
import {QuestionnaireComponent} from './questionnaire/questionnaire.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AvatarPickComponent } from './avatar-pick/avatar-pick.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    QuestionnaireComponent,
    AvatarPickComponent,
    CredentialsComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class RegisterModule {
}
