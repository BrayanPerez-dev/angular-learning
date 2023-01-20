import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!:City
  @Input() selection!:City
  @Output() onCitySelectedEvent = new EventEmitter<City>()
  @Output() onCityDeleteEvent = new EventEmitter<string>()

  onCitySelected(city:City):void{
    this.onCitySelectedEvent.emit(city)
  }

  onCityDelete(id:string):void{
    this.onCityDeleteEvent.emit(id)
  }
}
