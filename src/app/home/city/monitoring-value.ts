export interface MonitoringValue {
  conc: Conc;
  polutant: string;
  polutantValue: number;
  temperature: number;
  pressure: number;
  dominentpol: string;
  criteria?: Criterum[];
}

export interface Conc {
  valLow_1: number;
  valHigh_1: number;
  valLow_2: number;
  valHigh_2: number;
  valLow_3: number;
  valHigh_3: number;
  valLow_4: number;
  valHigh_4: number;
  valLow_5: number;
  valHigh_5: number;
  valLow_6: number;
  valHigh_6: number;
  valLow_7: number;
  valHigh_7: number;
}

export interface Criterum {
  min: number;
  max: number;
}

export interface ProgressBarValue {
  criteria?: Criterum[];
  isDominatePolutant: boolean;
  convertedValue: number;
  polutant: string;
}
