import { Component, Input, OnInit } from '@angular/core';
import { MonitoringValue, ProgressBarValue } from '../../monitoring-value';
import {
  CO,
  NO2,
  O3,
  PM10,
  PM25,
  SO2,
} from 'src/app/constants/monitoring-constants';

@Component({
  selector: '[app-monitoring-table]',
  templateUrl: './monitoring-table.component.html',
  styleUrls: ['./monitoring-table.component.scss'],
})
export class MonitoringTableComponent implements OnInit {
  _cityDetails!: MonitoringValue;
  get cityDetails(): MonitoringValue {
    return this._cityDetails;
  }
  @Input() set cityDetails(value: MonitoringValue) {
    this._cityDetails = value;
    this.renderSwitch(value);
  }
  progressBarValue!: ProgressBarValue;
  min!: string;
  max!: string;
  constructor() {}

  ngOnInit() {}

  renderSwitch(data: MonitoringValue) {
    let isDominatePolutant = false;
    let convertedValue!: number;
    switch (data.polutant) {
      case CO.polutant:
        if (CO.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(
          (calculatorFirst() * 28.01) /
            setMolecularValue(data.temperature, data.pressure)
        );
        break;
      case NO2.polutant:
        if (NO2.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(
          (calculatorFirst() * 46.0055) /
            setMolecularValue(data.temperature, data.pressure)
        );
        break;
      case O3.polutant:
        if (O3.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(
          (calculatorO3() * 48) /
            setMolecularValue(data.temperature, data.pressure)
        );
        break;
      case PM10.polutant:
        if (PM10.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(calculatorFirst());
        break;
      case PM25.polutant:
        if (PM25.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(calculatorFirst());
        break;
      case SO2.polutant:
        if (SO2.attributeName === data.dominentpol) {
          isDominatePolutant = true;
        }
        convertedValue = round(
          (calculatorSO2() * 64.066) /
            setMolecularValue(data.temperature, data.pressure)
        );
        break;
      default:
        console.log(`Sorry, we are out of test.`);
    }

    this.progressBarValue = {
      isDominatePolutant,
      convertedValue,
      criteria: data.criteria,
      polutant: data.polutant,
    };

    function setMolecularValue(t: number, p: number) {
      return 22.41 * ((273 + t) / 273 / (1013 / p));
    }

    function calculatorFirst() {
      let converted: number = 0;
      if (data.polutantValue >= 0 && data.polutantValue <= 50) {
        converted = invLinear(
          50,
          0,
          data.conc.valHigh_1,
          data.conc.valLow_1,
          data.polutantValue
        );
      } else if (data.polutantValue > 50 && data.polutantValue <= 100) {
        converted = invLinear(
          100,
          51,
          data.conc.valHigh_2,
          data.conc.valLow_2,
          data.polutantValue
        );
      } else if (data.polutantValue > 100 && data.polutantValue <= 150) {
        converted = invLinear(
          150,
          101,
          data.conc.valHigh_3,
          data.conc.valLow_3,
          data.polutantValue
        );
      } else if (data.polutantValue > 150 && data.polutantValue <= 200) {
        converted = invLinear(
          200,
          151,
          data.conc.valHigh_4,
          data.conc.valLow_4,
          data.polutantValue
        );
      } else if (data.polutantValue > 200 && data.polutantValue <= 300) {
        converted = invLinear(
          300,
          201,
          data.conc.valHigh_5,
          data.conc.valLow_5,
          data.polutantValue
        );
      } else if (data.polutantValue > 300 && data.polutantValue <= 400) {
        converted = invLinear(
          400,
          301,
          data.conc.valHigh_6,
          data.conc.valLow_6,
          data.polutantValue
        );
      } else if (data.polutantValue > 400 && data.polutantValue <= 500) {
        converted = invLinear(
          500,
          401,
          data.conc.valHigh_7,
          data.conc.valLow_7,
          data.polutantValue
        );
      } else if (data.polutantValue > 500) {
        converted = invLinear(
          500,
          401,
          data.conc.valHigh_7,
          data.conc.valLow_7,
          501
        );
      }
      return converted;
    }

    function calculatorO3() {
      let converted: number = 0;
      if (data.polutantValue >= 0 && data.polutantValue <= 50) {
        converted = invLinear(50, 0, 54, 0, data.polutantValue);
      } else if (data.polutantValue > 50 && data.polutantValue <= 100) {
        converted = invLinear(100, 51, 70, 55, data.polutantValue);
      } else if (data.polutantValue > 100 && data.polutantValue <= 150) {
        converted = invLinear(150, 101, 85, 71, data.polutantValue);
      } else if (data.polutantValue > 150 && data.polutantValue <= 200) {
        converted = invLinear(200, 151, 105, 86, data.polutantValue);
      } else if (data.polutantValue > 200 && data.polutantValue <= 300) {
        converted = invLinear(300, 201, 200, 106, data.polutantValue);
      } else {
        converted = invLinear(300, 201, 200, 106, 301);
      }
      return converted;
    }

    function calculatorSO2() {
      let converted: number = 0;
      if (data.polutantValue >= 0 && data.polutantValue <= 50) {
        converted = invLinear(50, 0, 35, 0, data.polutantValue);
      } else if (data.polutantValue > 50 && data.polutantValue <= 100) {
        converted = invLinear(100, 51, 75, 36, data.polutantValue);
      } else if (data.polutantValue > 100 && data.polutantValue <= 150) {
        converted = invLinear(150, 101, 185, 76, data.polutantValue);
      } else if (data.polutantValue > 150 && data.polutantValue <= 200) {
        converted = invLinear(200, 151, 304, 186, data.polutantValue);
      } else {
        converted = 50;
      }
      return converted;
    }

    function invLinear(
      AQIhigh: number,
      AQIlow: number,
      Conchigh: number,
      Conclow: number,
      a: number
    ) {
      const c =
        ((a - AQIlow) / (AQIhigh - AQIlow)) * (Conchigh - Conclow) + Conclow;
      return c;
    }

    function round(convertedValue: number) {
      return Math.round((convertedValue + Number.EPSILON) * 100) / 100;
    }
  }

  receiveMin(e: string) {
    this.min = e;
  }

  receiveMax(e: string) {
    this.max = e;
  }
}
