import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneratedData } from 'src/app/functions/generated-data';
import { generateDataByAqi } from 'src/app/functions/generetDataByAqi';

@Component({
  selector: 'app-city-panel',
  templateUrl: './city-panel.component.html',
  styleUrls: ['./city-panel.component.scss'],
})
export class CityPanelComponent implements OnInit {
  panelData!: GeneratedData;
  _aqi!: number;
  get aqi(): number {
    return this._aqi;
  }
  @Input() set aqi(value: number) {
    this._aqi = value;
    this.setData(this._aqi);
  }
  @Input() name!: string;
  @Output() colorEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  setData(aqi: number) {
    this.panelData = generateDataByAqi(aqi);
    this.colorEvent.emit(this.panelData.color);
  }
}
