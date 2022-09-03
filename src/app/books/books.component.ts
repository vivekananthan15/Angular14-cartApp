import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService:BooksService){ } 

 // cart: Book[]=[];
  
   isShowing:boolean=true;
  /*toggleBooks(){
    //if it is true, set to false
    //if it is false, set to true
    this.isShowing=!this.isShowing;
  } */  
  ngOnInit(): void {
    this.books=this.bookService.getBooks();
  }
  
  /* addToCart(event: Book)
  {
    console.log(event);    
    
  } */

  /*
   name:string='Clean Code';
  author:string="Robert C Martin";
  src:string='https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  name2:string='The Pragmatic Programmer';
  author2:string="David Thomson";
  src2:string='https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';
  myName:string='';  
   isDisabled:boolean=false;
  handleClick(){
    this.isDisabled=true;
    alert('Button disabled');
  }  
  handleInput(event:any){
    //console.log(event.target.value);
    this.myName=event.target.value;
  } */
  /* constructor() { 
    //console.log({constructor:'constructor'});
  } */

  /* ngOnInit(): void {
    //console.log({ngoninit:'on in it'});
    
  } */

}
