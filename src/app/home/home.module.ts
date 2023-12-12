import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { LimitsOfPollutantComponent } from './limits-of-pollutant/limits-of-pollutant.component';
import { AqiItemComponent } from './cities/city-item/aqi-item/aqi-item.component';
import { CityItemComponent } from './cities/city-item/city-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { CityPanelComponent } from './city/city-panel/city-panel.component';
import { CityMonitoringComponent } from './city/city-monitoring/city-monitoring.component';
import { MonitoringTableComponent } from './city/city-monitoring/monitoring-table/monitoring-table.component';
import { ProgressBarComponent } from './city/city-monitoring/monitoring-table/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CitiesComponent,
    CityComponent,
    LimitsOfPollutantComponent,
    AqiItemComponent,
    CityItemComponent,
    CityPanelComponent,
    CityMonitoringComponent,
    MonitoringTableComponent,
    ProgressBarComponent,
  ],
  exports: [HomeComponent],
  imports: [CommonModule, HttpClientModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
