import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  

  constructor(private _vehicleService:VehicleService, private _router:Router) {
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internet server error");
      }

    
      
    )
    
    
    



    
  
    

   }

  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (error:any)=>{
        alert("server down");

      }
    )

  }
  pagination(page:number){

    this._vehicleService.getpagedVehicles(page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internet server not avaialable");
      }
    )

  }
  sort(){
    this._vehicleService.getsortedVehicles( this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert(" internal server down");
      }
      )
    
    
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("dalete sucesfully");
        location.reload();
      },
      (error:any)=>{
        alert("internal server ");
      }
    )
  }
  view(id:string){
    this._router.navigateByUrl('/dashboard/vehicle-details/'+id);

  }
  

}
