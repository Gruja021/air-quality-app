import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}
  getCityParams() {
    return this.http
      .get<any>(
        `https://api.waqi.info/search/?keyword=serbia&token=fdeaed2b3355eea668e47f6450c932aecfb0312f`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
