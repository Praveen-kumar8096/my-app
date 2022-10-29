import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public lenth:number=0;
  public breadth:number=0;
  public result:number=0;


  constructor() { }

  ngOnInit(): void{
    

  }
  area(){
    this.result=this.lenth*this.breadth;
  }

  perimeter(){
    this.result=2*this.lenth+2*this.breadth;
  }
}