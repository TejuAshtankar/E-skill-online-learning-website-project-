import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {NotificationDisplayService} from '../../../../services/notification-display.service';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faLaptopCode = faLaptopCode;
  display: any;
  durationInSeconds = 5;
  constructor(private matDialog: MatDialog, private router: Router,private notification :NotificationDisplayService) { }

  // onSignup(){

  //   let dialogRef =this.matDialog.open(SignupComponent, {
  //     // height: '400px',
  //    width: '500px',

  //   });
  // }
  // onLogin(){
  //   let dialogRef =this.matDialog.open(LoginComponent, {
  //     // height: '400px',
  //    width: '500px',

  //   });
  // }

  onDashboardClick() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/account']);
    }
  }



  onloginclick() {
   var  tokena=localStorage.getItem('token');
   console.log(tokena)
    if (localStorage.getItem('token') == null) {

      this.router.navigate(['/login']);

    } else {

      this.display="user already registered"
      this.notification.openSnackBar( this.display,"");
      this.router.navigate(['/home']);
    }


    
  }
}


  // end



