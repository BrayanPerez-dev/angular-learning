import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
interface contactForm{
  name:string;
  checkAdult:boolean;
  deparment:string;
  comment:string
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @ViewChild('contactForm')contactForm!:NgForm
  id!:string;
  constructor(private readonly route:ActivatedRoute){

  }


  ngOnInit():void{
    this.route.params.subscribe((params:Params)=>{
     console.log(params)
     this.id = params['id']
    })
  }
  model = {
    name:'',
    checkAdult:false,
    deparment:'',
    comment:'...'
  }
  onSubmit(/*form:NgForm*/):void{
    console.log('form->',this.contactForm)
  }
}
