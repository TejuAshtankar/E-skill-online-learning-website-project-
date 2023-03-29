import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/edu/components/about/about.component';
import { ContactComponent } from './modules/edu/components/contact/contact.component';
import { CourseDetailsComponent } from './modules/edu/components/course-details/course-details.component';
import { CoursesComponent } from './modules/edu/components/courses/courses.component';
import { DashboardComponent } from './modules/edu/components/dashboard/dashboard.component';
import { HomeComponent } from './modules/edu/components/home/home.component';
import { InstructorsComponent } from './modules/edu/components/instructors/instructors.component';
import { OutFeaturesComponent } from './modules/edu/components/out-features/out-features.component';
import { TestimonialComponent } from './modules/edu/components/testimonial/testimonial.component';

const routes: Routes = [
  {path:'' , loadChildren: () =>
import('./modules/edu/edu.module').then((m)=> m.EduModule)},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
