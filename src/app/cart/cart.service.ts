import { Injectable } from '@angular/core';
import { BookComponent } from '../books/book/book.component';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[]=[];
  amt: Book[]=[];

  constructor() { }

  add(book:Book){
    console.log(book);
    
    this.cart.push(book)
  }
  remove(book: Book){
    this.cart=this.cart.filter((b)=>b!=book);

  }
  get(){
    return this.cart;
    //this.cart.map(())    
  }
  sum(){       
    this.amt= this.cart;
    return this.amt.reduce((acc, val) => acc += val.amount, 0);
    //this.cart.reduce((amt1)=>console.log(amt1.amount));     
    
  }

  }
