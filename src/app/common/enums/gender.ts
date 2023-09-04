export enum GenderEnum {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE'
}

export type Gender = keyof typeof GenderEnum;
