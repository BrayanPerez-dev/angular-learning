import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit{
  contactForm!:FormGroup;
  name!:string;
  deparments:string[]=[]
  selectedCity$ = this.dataSvc.selectedCity$
  constructor(private readonly fb:FormBuilder,private readonly route:ActivatedRoute,private readonly dataSvc:DataService){

  }
  ngOnInit():void{
   this.deparments = this.route.snapshot.data['deparments']
   this.contactForm = this.initForm()
   this.route.queryParams.subscribe((params:Params)=>{
    this.name = params['name']
   })
   //this.onPatchValue();
   //this.onSetValue();
  }
  onPatchValue():void{
  this.contactForm.patchValue({name:'Brayan'})
  }

  onSetValue():void{
    this.contactForm.setValue({comment:'Hola mundo'})
  }
  onSubmit():void{
     console.log('Form -> ',this.contactForm.value)
  }

  initForm():FormGroup{
  return this.fb.group({
     name:['',[Validators.required,Validators.minLength(3)]],
     checkAdult:['',[Validators.required]],
     deparment:[''],
     comment:['',[Validators.required]],

  })
  }
}
