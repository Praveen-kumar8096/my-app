import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // 
  public cartsCountSub: BehaviorSubject<any>=new BehaviorSubject(0); 
  public cartsCount:number=0;
  constructor() { }
}
