import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
//export class BookComponent implements OnInit,OnDestroy {
  export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  //@Output() bookEmitter = new EventEmitter<Book>();

  //myInterval:any=null;
  isInCart:boolean=false;
  isDisable:boolean=false;

  constructor(private cartService:CartService, private authService : AuthService) { }

  ngOnInit(): void {
    
  }
  addToCart()
    {
      //console.log(this.book);      
      //this.bookEmitter.emit(this.book);
      if(!this.authService.isAuthenticated)
      {
        this.isDisable=true;
      }
      else{
      this.isInCart=true;
      this.cartService.add(this.book);   
      this.isDisable=false;
      }
      
    }

    removeFromCart(){
      this.isInCart=false;
      this.cartService.remove(this.book);
    }

  /* ngOnInit(): void {
    this.myInterval=setInterval(()=>{
      console.log('Hello');
      
    },1000)
  } 
  
  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    console.log({onDestory:'OnDestroy'});
    
  } */    

}
