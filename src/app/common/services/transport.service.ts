import {Injectable} from '@angular/core';
import {ElectricTransport, ElectricTransportTypeEnum} from '../enums/electric-transport';
import {electricTransportTypes, models} from '../data/electric-transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  getManufacturers(transportType: ElectricTransport): string[] {
    switch (transportType) {
      case ElectricTransportTypeEnum.KICKSCOOTER:
        return electricTransportTypes;
      default:
        return [];
    }
  }

  getModels(manufacturer: string): string [] {
    if (manufacturer in models) {
      return models[manufacturer as never];
    }
    return [];
  }
}
