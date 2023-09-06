export enum ElectricTransportTypeEnum {
  'KICKSCOOTER' = 'KICKSCOOTER',
  'MONOWHEEL' = 'MONOWHEEL'
}

export type ElectricTransport = keyof typeof ElectricTransportTypeEnum;
