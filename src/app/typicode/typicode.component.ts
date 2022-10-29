import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../typicode.service';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {
  public typicodes:any=[];
  constructor(private _typicodeServices:TypicodeService) { 
    this._typicodeServices.getTypicode().subscribe(

      (data:any)=>{
        this.typicodes=data;
      },
      (error:any)=>{
        alert("internet server error");
      }
    )

  }

  ngOnInit(): void {
  }

}
