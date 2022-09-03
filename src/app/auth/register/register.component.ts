import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interface/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:LoginForm={
    email:'',
    password:'',
    cnfrm_password:''
  };

  //isLoading:boolean=false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  submit() {   
    this.authService.register(this.form);
    //console.log(this.form);
    
  }
  isLoading(){
    return this.authService.isLoading;
  }

}
