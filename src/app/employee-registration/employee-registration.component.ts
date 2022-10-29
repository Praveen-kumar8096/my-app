import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor() { }
  public name:string="";
  public age:number=0;
  public company:string="";
  public package:number=0;
  public employees:any=[
    
    {name:'',age:0,company:'',package:0},
    {name:'',age:0,company:'',package:0},
  ]

  ngOnInit(): void {
  }
  registration(){
    
    let employee={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package
      

    }
    alert("Register Successfully");
    this.employees.push(employee);
    
    this.name="";
    this.age=0;
    this.company="";
    this.package=0;
 
  }
  delete(i:number){
    this.employees.splice(i,1);
  }
  

}
