import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { NavigationExtras, Router, UrlSerializer } from '@angular/router';
import { CitiesList } from './cities-list';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities!: CitiesList[];
  cityName!: string | undefined;

  constructor(
    private citiesService: CitiesService,
    private router: Router,
    private serializer: UrlSerializer
  ) {}
  ngOnInit() {
    this.citiesService.getCityParams(this.cityName).subscribe((res: any) => {
      this.cities = res.data;
    });
  }

  onSubmit() {
    if (this.cityName === '') {
      this.cityName = undefined;
    }
    this.citiesService.getCityParams(this.cityName).subscribe((res: any) => {
      this.cities = res.data;
      if (this.cities.length > 0) {
        const queryParams = {
          lat: this.cities[0].station.geo[0],
          long: this.cities[0].station.geo[1],
        };
        let navigationExtras: NavigationExtras = {
          queryParams,
        };
        const queryParamsString = new HttpParams({
          fromObject: queryParams,
        }).toString();
        this.router.navigate(['/location'], navigationExtras);
      }
    });
  }
}
