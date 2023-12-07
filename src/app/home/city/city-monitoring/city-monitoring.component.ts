import { Component, Input, OnInit } from '@angular/core';
import { CityDetails } from '../city-details';
import { MonitoringValue } from '../monitoring-value';

@Component({
  selector: 'app-city-monitoring',
  templateUrl: './city-monitoring.component.html',
  styleUrls: ['./city-monitoring.component.scss'],
})
export class CityMonitoringComponent implements OnInit {
  @Input() cityDetails!: CityDetails;
  @Input() cityDetailsNew!: MonitoringValue[];
  @Input() cityDetailsOld!: MonitoringValue[];

  constructor() {}

  ngOnInit() {}
}
