import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
isUserValid=false;

  constructor(private loginAuth: AuthService,private router :Router) { }

  ngOnInit(): void {
  }

  loginform: FormGroup= new FormGroup({
    mail: new FormControl("",[Validators.required,Validators.email]),
    pwd:new FormControl("",[Validators.required,])
  }

  );

  get Email(){
   return  this.loginform.get("mail")?.value as FormControl;
  }
  get Password(){
    return this.loginform.get("pwd")?.value as FormControl;
  }

  
  LoginValidation(){
  this.loginAuth.Loginuser(
    [this.loginform.value.mail,
      this.loginform.value.pwd]
  ).subscribe(res=>{
    if(res=='Failure'){
      this.isUserValid=true;
      alert("login unsucessful");
    }
    else{
      
      this.isUserValid=true;
      this.loginAuth.setToken(res);
      this.loginAuth.UserData([this.loginform.value.mail,
        this.loginform.value.pwd]).subscribe(r=>
        {
          console.log(r);
          localStorage.setItem("data",JSON.stringify(r));
        }
      );
     this.router.navigateByUrl('/home');
    }
  });
  }

  
}
