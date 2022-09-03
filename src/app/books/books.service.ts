import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:'Clean Code',
        author:"Robert C Martin",
        image:'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount:700
      },
      {
        name:'The Pragmatic Programmer',
        author:"David Thomson",
        image:'https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount:800
      },
      {
        name:'Introduction to Algorithms',
        author:"R Rivest",
        image:'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
        amount:1000
      },
      {
        name:'Code Complete',
        author:"Steve Mcconnell",
        image:'https://images-na.ssl-images-amazon.com/images/I/41nvEPEagML._SX408_BO1,204,203,200_.jpg',
        amount:900
      }
  
    ];
  }
}
