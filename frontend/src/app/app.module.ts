import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
    
    
  ],
  providers: [DatePipe,MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
