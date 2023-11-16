import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'tr[app-city-item]',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
})
export class CityItemComponent {
  time = '';
  _city: any;
  get city(): any {
    return this._city;
  }
  @Input() set city(value: any) {
    this.time = moment.unix(value.time.vtime).format('DD.MM.YYYY. HH:mm');
    this._city = value;
  }
  @Input() i: number = 0;
}
