import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  
  public accounts:any=[];

  constructor(private _flipkartService:FlipkartService) {
    this._flipkartService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (error:any)=>{
        alert("server internet down");
      }
    )
   }

  ngOnInit(): void {
  }

}
