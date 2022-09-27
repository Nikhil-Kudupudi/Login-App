import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  rpwd: string='none';

  registrationform=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*?"),Validators.minLength(3)]),
    lastname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),
    Email:new FormControl("",[Validators.required,Validators.pattern(".+\@[a-z]{3}[a-z]*\.[a-z]{3}")]),
    Mobile:new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]),
    Gender:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(6),]),
    repeat_password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  });

Signupform(){
  if ( this.Password.value==this.Repeat_password.value ) {
    this.rpwd='none';
  }
  else{
    this.rpwd='inline';
  }
  
}
get Firstname(){
  return this.registrationform.get("firstname") as FormControl;
}
get Lastname(){
  return this.registrationform.get("lastname") as FormControl;
}
get Email(){
  return this.registrationform.get("Email") as FormControl;
}
get Mobile(){
  return this.registrationform.get("Mobile") as FormControl;
}
get Gender(){
  return this.registrationform.get("Gender") as FormControl;
}
get Password(){
  return this.registrationform.get("password") as FormControl;
}
get Repeat_password(){
  return this.registrationform.get("repeat_password") as FormControl;
}

}
