import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormNewItemComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(): void {
   console.log(this.newItemInput)
   this.newItemInput.nativeElement.focus()
  }
  
  @Input() label!:string
  @Input() className:string = 'btn-primary'
  @Input() selection!:City
  @Output() newItem = new EventEmitter<string>()
  @Output() onUpdateItemEvent = new EventEmitter<City>()
  @ViewChild('newItem') newItemInput!:ElementRef
  onAddNewItem(item:string):void{
       this.newItem.emit(item)
  }
  ngOnInit(): void {
    console.log(this.newItemInput)
  }
  onUpdateItem(/*item:City,change:string*/):void{
    const city:City = {
      _id:this.selection._id,
      name:this.newItemInput.nativeElement.value
    }
    this.onUpdateItemEvent.emit(city);
    this.onClear()
  }

  private onClear():void{
    this.newItemInput.nativeElement.value = ''
  }
}
