import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityLocation } from './location';
import { CityDetailsService } from './city-details.service';
import { CityDetails } from './city-details';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  cityDetails!: CityDetails;
  backColor!: string;
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
      .subscribe((res: CityDetails) => {
        this.cityDetails = res;
        console.log(res);
      });
  }

  receiveColor(color: string) {
    this.backColor = color;
  }
}
