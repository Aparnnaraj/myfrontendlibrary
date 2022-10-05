import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  email:'',
  password:''
}
emailRegex= '^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'

loginUser(){
console.log(this.user);
alert("Successful user login");
this.userservice.login(this.user)
.subscribe((res)=>{
  this.router.navigate(['booklist']);
 // alert("Successful login");
})
}
//loggedto(){
//  this.userservice.login(this.user)
 

//}
  constructor(public userservice:UserService, public router:Router) { }

  ngOnInit(): void {
  }
  

}
