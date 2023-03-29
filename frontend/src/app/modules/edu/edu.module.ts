import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EduRoutingModule } from './edu-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { OutFeaturesComponent } from './components/out-features/out-features.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HtmlComponent } from './components/html/html.component';
import { CssComponent } from './components/css/css.component';
import { AngularComponent } from './components/angular/angular.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseDetailsComponent,
    OutFeaturesComponent,
    InstructorsComponent,
    TestimonialComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    HtmlComponent,
    CssComponent,
    AngularComponent,
    WebDevelopmentComponent,
    ForgetPasswordComponent,
    OrderSummaryComponent,
   

  ],
  imports: [
  
    CarouselModule,
    
    CommonModule,
    EduRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
   

   
  ]
})
export class EduModule { }
