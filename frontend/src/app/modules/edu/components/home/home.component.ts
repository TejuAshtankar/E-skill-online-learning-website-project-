import { Component } from '@angular/core';
import { faCode ,faDisplay ,faHandshake, faUserTie, faTableList,faBookOpenReader,
  faIndianRupeeSign,faStar, faUser,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
 
templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
 
// font awesome icon
  faCode=faCode;
  faDisplay=faDisplay;
  faHandshake=faHandshake;
  faUserTie=faUserTie;
  faTableList=faTableList;
  faBookOpenReader=faBookOpenReader;
  faIndianRupeeSign=faIndianRupeeSign;
  faStar=faStar;
  faUser=faUser;
  faAngleRight=faAngleRight;
// owl crosel 

 
  
  



  
  



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

  feedbackOptions: OwlOptions = {
    
    loop: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

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
}
  // end

