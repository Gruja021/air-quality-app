import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityLocation } from './location';
import { CityDetailsService } from './city-details.service';
import { CityDetails } from './city-details';
import {
  AQICOCONC,
  AQINO2CONC,
  AQIPM10CONC,
  AQIPM25CONC,
  AQIPMOZONECONC,
  AQISO2CONC,
  CO,
  NO2,
  O3,
  PM10,
  PM25,
  SO2,
} from 'src/app/constants/monitoring-constants';
import { MonitoringValue } from './monitoring-value';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  cityDetails!: CityDetails;
  backColor!: string;
  cityDetailsNew!: MonitoringValue[];
  cityDetailsOld!: MonitoringValue[];

  constructor(
    private route: ActivatedRoute,
    private cityDetailsService: CityDetailsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) =>
      this.getData(params as CityLocation)
    );
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  getData(params: CityLocation) {
    this.cityDetailsService
      .getCityParams(params.lat, params.long)
      .subscribe((res: CityDetails) => {
        this.cityDetails = res;
        console.log(res);
        this.setCityDetails(this.cityDetails);
      });
  }

  receiveColor(color: string) {
    this.backColor = color;
  }

  setCityDetails(cityDetails: CityDetails) {
    const newCriterias = [
      NO2.newCriteria,
      PM10.newCriteria,
      PM25.newCriteria,
      SO2.newCriteria,
      CO.newCriteria,
      O3.newCriteria,
    ];

    const oldCriterias = [
      NO2.oldCriteria,
      PM10.oldCriteria,
      PM25.oldCriteria,
      SO2.oldCriteria,
      CO.oldCriteria,
      O3.oldCriteria,
    ];

    const detailsList = [
      {
        conc: AQINO2CONC,
        polutant: NO2.polutant,
        polutantValue: cityDetails.data.iaqi.no2
          ? cityDetails.data.iaqi.no2.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
      {
        conc: AQIPM10CONC,
        polutant: PM10.polutant,
        polutantValue: cityDetails.data.iaqi.pm10
          ? cityDetails.data.iaqi.pm10.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
      {
        conc: AQIPM25CONC,
        polutant: PM25.polutant,
        polutantValue: cityDetails.data.iaqi.pm25
          ? cityDetails.data.iaqi.pm25.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
      {
        conc: AQISO2CONC,
        polutant: SO2.polutant,
        polutantValue: cityDetails.data.iaqi.so2
          ? cityDetails.data.iaqi.so2.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
      {
        conc: AQICOCONC,
        polutant: CO.polutant,
        polutantValue: cityDetails.data.iaqi.co
          ? cityDetails.data.iaqi.co.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
      {
        conc: AQIPMOZONECONC,
        polutant: O3.polutant,
        polutantValue: cityDetails.data.iaqi.o3
          ? cityDetails.data.iaqi.o3.v
          : null,
        temperature: cityDetails.data.iaqi.t.v,
        pressure: cityDetails.data.iaqi.p.v,
        dominentpol: cityDetails.data.dominentpol,
      },
    ] as MonitoringValue[];
    this.cityDetailsNew = detailsList.map(
      (item: MonitoringValue, i: number) => {
        const itemCopy = JSON.parse(JSON.stringify(item));
        itemCopy.criteria = newCriterias[i];
        return itemCopy;
      }
    );
    this.cityDetailsOld = detailsList.map(
      (item: MonitoringValue, i: number) => {
        const itemCopy = JSON.parse(JSON.stringify(item));
        itemCopy.criteria = oldCriterias[i];
        return itemCopy;
      }
    );
    console.log(this.cityDetailsNew, 'new');
    console.log(this.cityDetailsOld, 'old');
  }
}
