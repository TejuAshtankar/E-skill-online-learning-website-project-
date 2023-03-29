import { Component } from '@angular/core';
import {
  faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
  import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  faIndianRupeeSign=faIndianRupeeSign;

  constructor() { }
  customOptions: OwlOptions = {
    
    loop: false,
   

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fa fa-caret-left fa-5x"></i>','<i class="fa fa-caret-right"></i>' ],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  // caruosel



}
