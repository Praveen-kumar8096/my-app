import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  public name:string="name";
  public names:string[]=['amazon fashion','all categeries','amazon pharmacy'

  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
