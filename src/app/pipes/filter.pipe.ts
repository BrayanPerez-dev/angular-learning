import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../services/data.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: City[], arg:string): City[] {
     let result :City[] = []
     if(!arg || arg?.length < 3) return cities
    for(const city of cities){
      if(city.name.toLowerCase().indexOf(arg.toLocaleLowerCase()) > -1){
        result = [...result,city]
    }

  }

  return result
  }
}
