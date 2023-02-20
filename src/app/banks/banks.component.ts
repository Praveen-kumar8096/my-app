import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  
  public accounts:any =[];
  public term:string="";
  
  

  constructor( private _bankService:BankService,private _router:Router) {
    
    this._bankService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts=data;
      },
  
      (error:any)=>{
  
        alert("internet server error");
      }

    )

    
   }

  ngOnInit(): void {
  }
  filter(){
    this._bankService.getFilteredAccounts(this.term).subscribe(

      (data:any)=>{
        this.accounts=data;

      }
    )

  }
  pagination(page:number){
    this._bankService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (error:any)=>{
        alert("internal server")
      }

    )
    

  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/bank-details/"+id);

  }
  edit(id:string){
    this._router.navigateByUrl('/dashboard/edit-account/'+id);

  }
  



}
