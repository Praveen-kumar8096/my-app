import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {

  public name:string="";
  public names:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  registration(){
    if(this.name !=""){
      this.names.push(this.name);
    }
    
    this.name="";

    
  }
  deletename(){
    this.names.pop();
    
  }

}
