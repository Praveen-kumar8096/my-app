import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  public lenth:number=0;
  public result:number=0;

  ngOnInit(): void {
  }

  square(){
    this.result=this.lenth*this.lenth
  }
  cube(){
    this.result=this.lenth*this.lenth*this.lenth
  }

}
