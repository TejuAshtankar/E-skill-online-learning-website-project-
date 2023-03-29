import { Component } from '@angular/core';

import {faFacebook,faTwitter,faGoogle,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faLinkedin=faLinkedin;

  islogged:boolean=true;
  loginForm: any;
  responseMessage: any;

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    
    //private dialogueRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)])
    })  
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  onSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }
  

    this.userService.login(data).subscribe((response: any) => {

      this.ngxService.stop();
      this.islogged=false;
      this.responseMessage = response?.message;
      localStorage.setItem('token', response.token)
      this.router.navigate(['/afterlogin/maindisplay/account']);
    }, (error) => {
      this.ngxService.stop();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = "something wnt wring. please try again later";
      }
      


    })
  }



 
  //end
}
