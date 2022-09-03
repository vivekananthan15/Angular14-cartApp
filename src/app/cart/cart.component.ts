import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //totalCart='test';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  getCart(){
    return this.cartService.get()
    //return this.cartService.sum();

  }
   totalCart(){    
    return this.cartService.sum();
    
    //return this.cartService.sum()
    //console.log('loop');
    
  } 

}
