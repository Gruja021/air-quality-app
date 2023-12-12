import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { CitiesObj } from './cities-list';

const TOKEN = `token=${enviroment.apiWaqiToken}`;

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}
  getCityParams(city = 'Serbia') {
    return this.http
      .get<any>(`https://api.waqi.info/search/?keyword=${city}&${TOKEN}`)
      .pipe(
        map((res: CitiesObj) => {
          return res;
        })
      );
  }
}
