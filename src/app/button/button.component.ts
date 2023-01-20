import { ChangeDetectionStrategy, Component ,Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent implements OnChanges,OnInit,OnDestroy{
 @Input() color!:string
 @Input() label!:string
 @Input() selection!:string

 
 ngOnChanges(changes: SimpleChanges): void {
   console.log('changes ->',changes);
 }

 ngOnInit(): void {
   console.log('OnInit')
 }
 ngOnDestroy(): void {
   console.log('OnDestroy')
 }
 couunterRender():void{
  console.log('button')
}
  
}
