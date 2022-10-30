import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  currentUser:BehaviorSubject<any> =new BehaviorSubject(null);
baseServerUrl="https://localhost:7183/api/";

jwtHelperService=new JwtHelperService;
  registerUser(user : Array<String>){
    return this.http.post(this.baseServerUrl+"Registers/CreateUser",{
      Firstname : user[0],
      Lastname: user[1],
      Email : user[2],
      Mobile : user[3],
      Gender : user[4],
      Password : user[5],
    },{
      responseType:'text',
    });
  }

  Loginuser(luser: Array<String> ){
    return this.http.post(this.baseServerUrl+"Registers/LoginUser",{
      Email: luser[0],
      Pwd : luser[1]
    },
    {
      responseType: 'text',
    })
  }

  UserData(user:Array<String>){
    return this.http.post(this.baseServerUrl+"Registers/UserData",{
      Email : user[0],
      Pwd :user[1]
    },
    {
      responseType : 'json',
    })
  }
  setToken(token: string){
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token=localStorage.getItem("access_token");
    const userInfo=token!=null?this.jwtHelperService.decodeToken(token):null;

    const data=userInfo? {
      id:userInfo.id,
      firstname:userInfo.firstname,
      lastname:userInfo.lastname,
      email:userInfo.email,
      mobile:userInfo.mobile,
      gender:userInfo.gender

    }:null;
    this.currentUser.next(data);

  }
isLoggedin(): boolean{
  return localStorage.getItem("access_token")?true:false;
}

removeToken(){
  localStorage.removeItem("access_token");
}

getdata(){
  return localStorage.getItem("data");
}
}
