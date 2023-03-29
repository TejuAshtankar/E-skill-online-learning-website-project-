import { Component } from '@angular/core';
import {faDisplay,faHandshake ,faUserTie,faTableList,faCode,faStar,faBookOpenReader,faGlobe,faVideo} from '@fortawesome/free-solid-svg-icons';;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faCode=faCode;
  faDisplay=faDisplay;
  faHandshake=faHandshake;
  faUserTie=faUserTie;
  faTableList=faTableList;
  faBookOpenReader=faBookOpenReader;
  faStar=faStar;
  faGlobe=faGlobe;
  faVideo=faVideo;
  
}
