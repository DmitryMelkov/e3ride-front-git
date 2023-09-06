import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormArray, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {ElectricTransportTypeEnum} from '../../../common/enums/electric-transport';
import {electricTransportTypes, models} from '../../../common/data/electric-transport';
import {TransportService} from '../../../common/services/transport.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @Output()
  nextStep = new EventEmitter<void>();
  hasTransport = true;
  yearsForSelect: number[] = [];
  readonly transportTypeEnum = ElectricTransportTypeEnum;
  private readonly transportService = inject(TransportService);
  formArray = new FormArray<UntypedFormGroup>([]);

  getManufacturers(formGroup: UntypedFormGroup): string[] {
    const type = formGroup.controls['type'].value;
    return this.transportService.getManufacturers(type);
  }

  getModels(formGroup: UntypedFormGroup): string [] {
    const manufacturer = formGroup.controls['manufacturer'].value;
    return this.transportService.getModels(manufacturer);
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearsForSelect = Array.from(Array(20).keys()).map((_, index) => currentYear - index);
    this.addItem();
  }

  addItem() {
    this.formArray.push(new UntypedFormGroup({
      type: new UntypedFormControl(),
      manufacturer: new UntypedFormControl(),
      model: new UntypedFormControl(),
      acquisitionYear: new UntypedFormControl()
    }));
  }

  hasTransportChanged(value: string) {
    this.hasTransport = value === 'true';
  }

  submit() {
    this.nextStep.emit();
  }
}
