import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aqi-item',
  templateUrl: './aqi-item.component.html',
  styleUrls: ['./aqi-item.component.scss'],
})
export class AqiItemComponent {
  @Input() aqi: number = 0;
}
