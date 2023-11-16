import { Component, OnInit } from '@angular/core';
import { Limit } from './limit';

@Component({
  selector: 'app-limits-of-pollutant',
  templateUrl: './limits-of-pollutant.component.html',
  styleUrls: ['./limits-of-pollutant.component.scss'],
})
export class LimitsOfPollutantComponent implements OnInit {
  limits: Limit[] = [
    { name: 'Dobar', range: '0 -50', color: 'green' },
    { name: 'Umeren', range: '51 - 100', color: 'yellow' },
    { name: 'Nezdrav za osetljive grupe', range: '101 - 150', color: 'orange' },
    { name: 'Nezdrav', range: '151 - 200', color: 'pink' },
    { name: 'Veoma nezdrav', range: '200 - 300', color: 'purple' },
    { name: 'Opasan', range: '301 + ', color: 'deepPurple' },
  ];
  ngOnInit(): void {}
}
