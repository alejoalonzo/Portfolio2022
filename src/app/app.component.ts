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

  //@ViewChild('hide') hide!: ElementRef
  isHomePage = false;

  constructor(private router: Router){ 
  
    this.titleName= 'ALE';
    this.titleArea= 'WEB';
    this.titleJob= 'DEV';
  }

  ngOnInit(): void {
    //cursor effect---------------------------------------------------------------
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const cursor2 = document.querySelector(".cursor2") as HTMLElement;
    
    // set the initial opacity of the cursor elements to 0
    cursor.style.opacity = cursor2.style.opacity = "0";
    
    document.addEventListener("mousemove", (e) => {
      // check if the mouse pointer is inside the viewport
      if (e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight) {
        // set a delay for the movement of cursor
        setTimeout(() => {
          cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; opacity: 1;`;
        }, 50); // adjust the delay time (in milliseconds) as needed
        
        cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; opacity: 1;`;
      }
    });
    
    // add a "mouseleave" event listener to hide the cursor elements
    document.body.addEventListener("mouseleave", (e) => {
      cursor.style.opacity = "0";
      cursor2.style.opacity = "0";
    });

    // add an "if" statement to check if cursor2 is at opacity 0, and if so, set cursor to opacity 0 as well
    setInterval(() => {
      if (cursor2.style.opacity === "0") {
        cursor.style.opacity = "0";
      }
    }, 50);
    //-------------------------------------------------------------------------------
    //hide header from home
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  
    $(".hide").on('click', function(){
      $("nav ul").toggle('slow');
    })

    // -----------------------------------------------------NAVBAR-------------------
    var posAnteriorScrol = document.documentElement.scrollTop;
    
    window.onscroll = function(){
      if (window.innerWidth > 768) { 
        esconderMostrarMenu();
      }
    };
    const hideMenuByDefoult = () =>{
      this.navbar.nativeElement.style.display= "none";
    }
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

  
  toggleShow() {
    this.isShown = ! this.isShown;  
  }

}

