import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { AngularComponent } from './components/angular/angular.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CssComponent } from './components/css/css.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { HtmlComponent } from './components/html/html.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

import { OutFeaturesComponent } from './components/out-features/out-features.component';
import { SignupComponent } from './components/signup/signup.component';

import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';

const routes: Routes = [

  {path:'' ,component:DashboardComponent,
  children:[
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'courses' , component:CoursesComponent},
    {path:'contact' , component:ContactComponent},
    {path:'coursedetails' , component:CourseDetailsComponent},
    {path:'ourfeatures' , component:OutFeaturesComponent},
    {path:'instructor' , component:InstructorsComponent},
    {path:'testimonial' , component:TestimonialComponent},
    {path:'html' , component:HtmlComponent},
    {path:'css' , component:CssComponent},
    {path:'angular' , component:AngularComponent},
    {path:'webdevelopment' , component:WebDevelopmentComponent},
    {path:'login' , component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'forgetpassword' , component:ForgetPasswordComponent},
    {path:'ordersummary' , component:OrderSummaryComponent},
    {path:'account' , component:AccountComponent},
    
    
    {path:'' ,redirectTo:'/home',pathMatch:'full'},

  ]},

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EduRoutingModule { }
