import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: any;

  constructor(private citiesService: CitiesService) {}
  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCityParams().subscribe((res: any) => {
      console.log(res, 'response');
      this.cities = res.data;
    });
  }
}
