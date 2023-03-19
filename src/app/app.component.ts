import * as AOS from 'aos';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { faGithub, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBars, faCoffee, faFolderOpen, faMailBulk, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';

//------
declare let $: any;

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
  faArrowRight = faArrowRight;
  faWhatsapp = faWhatsapp;
  faMailBulk = faMailBulk;
  faBars = faBars;
  
  public titleName: String;
  public titleArea!: String;
  public titleJob!: String;

  isShown: boolean = false ; // hidden by default
  

  //efecto------------------
  @ViewChild('titleNamed') titleNamed!: ElementRef;
  @ViewChild('navbar')
  navbar!: ElementRef;

  srt: any;
  arrFromStr!: string[];

  @ViewChild("video", { static: true, read: ElementRef })
  video!: ElementRef;

  //@ViewChild('hide') hide!: ElementRef
  isHomePage = false;

  constructor(private router: Router){ 
   
    this.titleName= 'ALE';
    this.titleArea= 'WEB';
    this.titleJob= 'DEV';
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });

    AOS.init(); 
  
    $(".hide").on('click', function(){
      $("nav ul").toggle('slow');
    })
 
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

    this.video.nativeElement.autoplay = true;
    this.video.nativeElement.muted = true;
    this.video.nativeElement.loop = true;
    
  }
  
  toggleShow() {
    this.isShown = ! this.isShown;  
  }

  
}
