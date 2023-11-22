import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityLocation } from './location';
import { CityDetailsService } from './city-details.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  cityDetails: any;
  constructor(
    private route: ActivatedRoute,
    private cityDetailsService: CityDetailsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) =>
      this.getData(params as CityLocation)
    );
  }

  getData(params: CityLocation) {
    this.cityDetailsService
      .getCityParams(params.lat, params.long)
      .subscribe((res: any) => {
        this.cityDetails = res;
        console.log(res);
      });
  }
}
