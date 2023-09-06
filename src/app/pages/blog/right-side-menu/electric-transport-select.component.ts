import {Component, inject} from '@angular/core';
import {ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {ElectricTransport, ElectricTransportTypeEnum} from 'src/app/common/enums/electric-transport';
import {TransportService} from 'src/app/common/services/transport.service';

@Component({
  standalone: true,
  selector: 'app-electric-transport-select',
  templateUrl: './electric-transport-select.component.html',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ]
})
export class ElectricTransportSelectComponent {
  protected readonly transportTypeEnum = ElectricTransportTypeEnum;
  private readonly transportService = inject(TransportService);
  protected readonly form = new UntypedFormGroup({
    transportType: new UntypedFormControl(null, Validators.required),
    manufacturer: new UntypedFormControl(null, Validators.required),
    model: new UntypedFormControl(null, Validators.required),
    publicationType: new UntypedFormControl(null, Validators.required)
  });

  get manufacturers(): string[] {
    const type = this.form.getRawValue().transportType as ElectricTransport;
    return this.transportService.getManufacturers(type);
  }

  get models(): string[] {
    const manufacturer = this.form.getRawValue().manufacturer;
    return this.transportService.getModels(manufacturer);
  }

  get publicationType(): string[] {
    const model = this.form.getRawValue().model;
    if (model) {
      return [
        'обо всем',
        'о чем то конкретном'
      ];
    }
    return [];
  }
}
