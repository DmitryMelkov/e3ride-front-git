import {Component, EventEmitter, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {GenderEnum} from '../../../common/enums/gender';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  @Output()
  nextStep = new EventEmitter<void>();

  readonly months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ];
  readonly genderEnum = GenderEnum;
  form = new UntypedFormGroup({
    nickname: new UntypedFormControl(''),
    name: new UntypedFormControl(''),
    surname: new UntypedFormControl(''),
    hideName: new UntypedFormControl(false),
    gender: new UntypedFormControl(null),
    day: new UntypedFormControl(),
    month: new UntypedFormControl(),
    year: new UntypedFormControl(),
    hideBirthday: new UntypedFormControl(),
    country: new UntypedFormControl(),
    city: new UntypedFormControl(),
    aboutMe: new UntypedFormControl()
  });

  submit() {
    this.nextStep.emit();
  }
}
