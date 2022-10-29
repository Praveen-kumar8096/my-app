import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public name:string="";
  public price:number=0;
  public quantity:number=0;
  public carts:any = [
    {name:'',price:0,quantity:0},
    {name:'',price:0,quantity:0}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  addtocart(){
    let cart={
      name:this.name,
      price:this.price,
      quantity:this.quantity

    }
    alert("cart successfully");
    this.carts.push(cart);
    this.name="",
    this.price=0,
    this.quantity=0



  }

  delete(i:number){
    this.carts.splice(i,1);
  }
  
    
}










