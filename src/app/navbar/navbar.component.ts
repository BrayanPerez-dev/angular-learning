import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
       
  constructor(private readonly router:Router){

  }
  
  goToReactive():void{
    this.router.navigate(['contact-reactive'],{queryParams:{name:'Brayan'}})
  }
  goToTemplate():void{
    this.router.navigate(['contact-template','580'])
  }

}
