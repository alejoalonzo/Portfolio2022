import { Component } from '@angular/core';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faFolderOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioAngular';
  faCoffee = faCoffee;
  faFolderOpen = faFolderOpen;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  faYoutube = faYoutube;
  faSun = faSun;
  faMoon = faMoon;
}
