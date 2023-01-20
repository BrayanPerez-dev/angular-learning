import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';


const departments = ['Marketing','Sales','Other'];

@Injectable({
  providedIn: 'root'
})

export class DataResolverService implements Resolve<any>{

  resolve():Observable<any> {
    return of(departments)
   }
}
