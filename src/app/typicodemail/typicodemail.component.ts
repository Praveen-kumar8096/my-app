import { Component, OnInit } from '@angular/core';
import { TypicodemailService } from '../typicodemail.service';

@Component({
  selector: 'app-typicodemail',
  templateUrl: './typicodemail.component.html',
  styleUrls: ['./typicodemail.component.css']
})
export class TypicodemailComponent implements OnInit {

  public typicodes:any=[];

  constructor(private _typicodemailService:TypicodemailService) { 
    this._typicodemailService.getTypicodes().subscribe(
      (data:any)=>{
        this.typicodes=data;
      },
      (error:any)=>{
        alert("internet server slow");
      }
      );

    
    
  }

  ngOnInit(): void {
  }
  

}
