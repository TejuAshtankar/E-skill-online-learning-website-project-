import { Component } from '@angular/core';
import {faHome,faEnvelope,faPhone,faPrint,} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faGithub,faInstagram,faGoogle,faLinkedin} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faHome=faHome
  faEnvelope=faEnvelope
  faPhone=faPhone
  faPrint=faPrint

  faFacebook = faFacebook
  faTwitter=faTwitter
  faGithub=faGithub
  faInstagram=faInstagram
  faGoogle=faGoogle
  faLinkedin=faLinkedin
  // end
}
