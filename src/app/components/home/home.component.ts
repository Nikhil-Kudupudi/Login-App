import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authService: AuthService,private router: Router) { }
  y:any;
  ngOnInit(): void {
    
    this.y=this.authService.getdata();
    this.y=JSON.parse(this.y);
  }

  // this.loginAuth.UserData([this.loginform.value.mail,
  //   this.loginform.value.pwd]).subscribe(r=>{
  //     this.home.
  //   });
  //   this.router.navigateByUrl('home');


user(){
 
}
logOut()
{
  this.authService.removeToken();
  this.router.navigateByUrl('/login');
}
}
