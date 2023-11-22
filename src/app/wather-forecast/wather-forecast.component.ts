import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wather-forecast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './wather-forecast.component.html',
  styleUrls: ['./wather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatherForecastComponent { }
