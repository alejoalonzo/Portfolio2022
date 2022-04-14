import * as AOS from 'aos';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faFolderOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
  faArrowDown = faArrowDown;

  @ViewChild('navbar')
  navbar!: ElementRef;

  ngOnInit(): void {
    AOS.init(); 
  

  // -----------------------------------------------------NAVBAR-------------------
  var posAnteriorScrol = document.documentElement.scrollTop;
  
  window.onscroll = function(){
      esconderMostrarMenu()
  };
    const esconderMostrarMenu = () =>{
      var posActualScrol = document.documentElement.scrollTop;
      if(posAnteriorScrol>posActualScrol){
         this.navbar.nativeElement.style.top="0"; 
        //document.getElementById("navbar").style.top = "0"
      }else
        this.navbar.nativeElement.style.top="-70px"; 
        //document.getElementById("navbar").style.top = "-100px"
        posAnteriorScrol = posActualScrol;
    }  
  
  }

}
