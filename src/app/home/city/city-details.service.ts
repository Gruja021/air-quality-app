import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { CityDetails } from './city-details';

const TOKEN = `token=${enviroment.apiWaqiToken}`;

@Injectable({
  providedIn: 'root',
})
export class CityDetailsService {
  constructor(private http: HttpClient) {}

  getCityParams(lat: string, long: string) {
    return this.http
      .get<CityDetails>(
        `https://api.waqi.info/feed/geo:${lat};${long}/?keyword=serbia&${TOKEN}`
      )
      .pipe(
        map((res: CityDetails) => {
          return res;
        })
      );
  }
}
