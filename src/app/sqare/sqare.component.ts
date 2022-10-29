import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqare',
  templateUrl: './sqare.component.html',
  styleUrls: ['./sqare.component.css']
})
export class SqareComponent implements OnInit {

  public lenth:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result=this.lenth*this.lenth
  }
  perimeter(){
    this.result=4*this.lenth
  }
  

}
