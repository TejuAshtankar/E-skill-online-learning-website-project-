import { Injectable } from '@angular/core';
import { HttpClient  , HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8080';
  constructor(private httpclient :HttpClient) { }
//register user
   signup(data:any){
   return  this.httpclient.post(this.url+'/user/signup/',data,{
      headers:new HttpHeaders().set('content-type','application/json')
      //here we seperatly setting or adding header with key value pais=r so key is content-type and value is application/json
    })
  }
//forget pd
  forgetpassword(data:any){
    return  this.httpclient.post(this.url+'/user/forgetpassword',data,{
       headers:new HttpHeaders().set('content-type','application/json')
     })
   }
//login
   login(data:any){
    return  this.httpclient.post(this.url+'/user/login',data,{
       headers:new HttpHeaders().set('content-type','application/json')
     })
   }


   //check Token 
   checktoken(){
    return  this.httpclient.get(this.url+'/user/checkToken');
   }

   //change password
   changepassword(data:any){
    return  this.httpclient.post(this.url+'/user/changePassword',data,{
       headers:new HttpHeaders().set('content-type','application/json')
     })
   }


}
