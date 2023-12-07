import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Criterum, ProgressBarValue } from '../../../monitoring-value';
import { CO } from 'src/app/constants/monitoring-constants';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  _progressBarValue!: ProgressBarValue;
  get progressBarValue(): ProgressBarValue {
    return this._progressBarValue;
  }
  @Input() set progressBarValue(value: ProgressBarValue) {
    this._progressBarValue = value;
    this.renderSwitch(value);
  }

  @Output() min = new EventEmitter<string>();
  @Output() max = new EventEmitter<string>();

  color!: string;
  lightColor!: string;
  width!: string;
  criteriaMin!: string;
  criteriaMax!: string;

  constructor() {}

  ngOnInit() {}

  renderSwitch(value: ProgressBarValue) {
    console.log(value);
    if (value.criteria) {
      switch (true) {
        case value.criteria[0].min <= value.convertedValue &&
          value.criteria[0].max >= value.convertedValue:
          this.color = 'green';
          this.lightColor = 'light-green';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[0].max
          }%`;
          this.criteriaMin = `${value.criteria[0].min}${checker()}`;
          this.criteriaMax = `${value.criteria[0].max}${checker()}`;

          break;
        case value.criteria[1].min <= value.convertedValue &&
          value.criteria[1].max >= value.convertedValue:
          this.color = 'yellow';
          this.lightColor = 'light-yellow';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[1].max
          }%`;
          this.criteriaMin = `${value.criteria[1].min}${checker()}`;
          this.criteriaMax = `${value.criteria[1].max}${checker()}`;
          break;
        case value.criteria[2].min <= value.convertedValue &&
          value.criteria[2].max >= value.convertedValue:
          this.color = 'orange';
          this.lightColor = 'light-orange';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[2].max
          }%`;
          this.criteriaMin = `${value.criteria[2].min}${checker()}`;
          this.criteriaMax = `${value.criteria[2].max}${checker()}`;
          break;
        case value.criteria[3].min <= value.convertedValue &&
          value.criteria[3].max >= value.convertedValue:
          this.color = 'pink';
          this.lightColor = 'light-pink';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[3].max
          }%`;
          this.criteriaMin = `${value.criteria[3].min}${checker()}`;
          this.criteriaMax = `${value.criteria[3].max}${checker()}`;
          break;
        case value.criteria[4].min <= value.convertedValue &&
          value.criteria[4].max >= value.convertedValue:
          this.color = 'purple';
          this.lightColor = 'light-purple';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[4].max
          }%`;
          this.criteriaMin = `${value.criteria[4].min}${checker()}`;
          this.criteriaMax = `${value.criteria[4].max}${checker()}`;
          break;
        case value.criteria[5].min <= value.convertedValue &&
          value.criteria[5].max >= value.convertedValue:
          this.color = 'deepPurple';
          this.lightColor = 'light-deep-purple';
          this.width = `${
            (value.convertedValue * 100) / value.criteria[5].max
          }%`;
          this.criteriaMin = `${value.criteria[5].min}${checker()}`;
          this.criteriaMax = `${value.criteria[5].max}${checker()}`;
          break;

        default:
          break;
      }
      this.min.emit(this.criteriaMin);
      this.max.emit(this.criteriaMax);
    }
    function checker(): string {
      return value.polutant === CO.polutant ? 'mg/m³' : 'µg/m³';
    }
  }
}
