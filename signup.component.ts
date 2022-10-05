import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form={
    fname:'',
    email:'',
    password:'',
    mobile:''
}
integerRegex=/^\d+$/
emailRegex='^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'

signupfn(){
 console.log(this.form);
  alert("Successfully registered in the library app");
  this.userservice.signup(this.form) 
  .subscribe((res)=>{
  this.router.navigate(['booklist'])
    //alert("Signup completed");
  })
}

 constructor(public userservice: UserService, public router:Router) { }


  ngOnInit(): void {
  }
 // signin() {
   //this.userservice.signup(this.form) ;
 // }


}
