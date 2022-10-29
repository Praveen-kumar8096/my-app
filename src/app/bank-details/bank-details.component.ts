import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  public account:any=[];
  public id:string="";
  
  constructor(private _bankService:BankService , private _activatedRoute:ActivatedRoute) { 
    
    this._activatedRoute.params.subscribe(

      (data:any)=>{
        this.account=this.id;
        this._bankService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }

        )
      }
     
    )
  }
  

  ngOnInit(): void {
  }

}
