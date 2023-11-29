import { Component, OnInit } from '@angular/core';
import { Limit } from './limit';
import { polutionLimit } from 'src/app/constants/polution-limits';

@Component({
  selector: 'app-limits-of-pollutant',
  templateUrl: './limits-of-pollutant.component.html',
  styleUrls: ['./limits-of-pollutant.component.scss'],
})
export class LimitsOfPollutantComponent implements OnInit {
  limits: Limit[] = polutionLimit;
  ngOnInit(): void {}
}
