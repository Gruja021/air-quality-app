import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

const TOKEN = `token=${enviroment.apiWaqiToken}`;

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}
  getCityParams() {
    return this.http
      .get<any>(`https://api.waqi.info/search/?keyword=serbia&${TOKEN}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
