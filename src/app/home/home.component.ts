import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit{
 

  @ViewChild(NgModel)filterInput!:NgModel;

  title = 'reto01';
  cities:City[] = [];
  name:string = 'brayan'
  selection!:City
  criteria!:string
  
  constructor(private readonly dataSvc:DataService){}
  ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe(res=> console.log(res))
  }
  ngOnInit():void{
    this.dataSvc.selectedCity$.subscribe((city:City) => this.selection = city)
    this.dataSvc.getCities().subscribe(cities => {
      this.cities = [...cities]
    })
    console.log(this.cities)
  }
  addNewCity(city:string):void{
    //this.cities.push(city)
    this.dataSvc.addNewCity(city).subscribe(res => {
      this.cities.push(res)
    })
  }
  onCitySelected(city: City) :void{
    console.log(city)
    //this.selection=city
    this.dataSvc.setCity(city)
  }
  onCityDelete(id:string):void{
    if(confirm('Are you sure?')){
      this.dataSvc.deleteCity(id).subscribe(() => {
        const tempArray = this.cities.filter(city => city._id !== id)
        this.cities = [...tempArray]
        this.onClear()
      })
    }
  }
  
  onUpdateCity(city:City):void{
    console.log(city)
    this.dataSvc.updateCity(city).subscribe(res => {
      console.log(res)
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr,city];
      this.onClear()
    })
  }
  onClear() {
  this.selection = {
    _id:'',
    name:''
  }
  }
}
