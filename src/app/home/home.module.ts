import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { LimitsOfPollutantComponent } from './limits-of-pollutant/limits-of-pollutant.component';
import { AqiItemComponent } from './cities/city-item/aqi-item/aqi-item.component';
import { CityItemComponent } from './cities/city-item/city-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    CitiesComponent,
    CityComponent,
    LimitsOfPollutantComponent,
    AqiItemComponent,
    CityItemComponent,
  ],
  exports: [HomeComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HomeModule {}
