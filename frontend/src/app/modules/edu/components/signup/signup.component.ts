import { Component} from '@angular/core';
import {faUser,faEnvelope,faLock,faKey} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  faUser=faUser;
  faEnvelope=faEnvelope;
  faLock=faLock;
  faKey=faKey;

  loginForm: any;
  repeatPass:String='none';
  constructor(private formbuilder: FormBuilder,
   
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z].*')]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
      confirmpassword:new FormControl('')
    })  
  }


  get name(){
    return this.loginForm.get('name')
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  get confirmpassword(){
    return this.loginForm.get('confirmpassword')
  }


  onSubmit() {
   
   if(this.password.value == this.confirmpassword.value){
 
    console.log("submitted")
    
   }else{
    this.repeatPass='inline'
   
   }
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }
  }



  // loginForm = new FormGroup({
  //   // name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
  //   email:new FormControl(null, [Validators.required, Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
  //   // confirmpassword:new FormControl(null)
  // })  

  // get name(){
  //   return this.loginForm.get('name');
  // }
  // get email(){
  //   return this.loginForm.get('email')
  // }
  // get password(){
  //   return this.loginForm.get('password')
  // }
  // get confirmpassword(){
  //   return this.loginForm.get('confirmpassword')
  // }

  // onSubmit(){
  
  //   var formData = this.loginForm.value;
  //   var data = {
  //     email: formData.email,
  //     password: formData.password
  //   }
  // }



  //end
}





