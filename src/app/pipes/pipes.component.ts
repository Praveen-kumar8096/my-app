import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string="hello praveen";
  public city:string="SIDDIPET";
  public dob:string="10-10-2022";
  public today:Date=new Date();

  public user:any = {name:'praveen',phone:7569587900};
  
  public price:number=1000;
  public age:number=20;
  public marks:number=90;

  constructor() { }

  ngOnInit(): void {
  }

}
