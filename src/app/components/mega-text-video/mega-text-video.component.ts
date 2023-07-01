import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight, faPlayCircle  } from '@fortawesome/free-solid-svg-icons'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-mega-text-video',
  templateUrl: './mega-text-video.component.html',
  styleUrls: ['./mega-text-video.component.scss']
})
export class MegaTextVideoComponent implements AfterViewInit {
  @ViewChild('headerText', { static: false }) headerTextElementRef!: ElementRef<SVGTextElement>;
  @ViewChild('svgElement', { static: false }) svgElementRef!: ElementRef<SVGElement>;
  @ViewChild('playVideoButon', { static: false }) playVideoButon!: ElementRef<SVGElement>;
  @ViewChild('headerE1') containerRef!: ElementRef;
  @ViewChild('headerText') zoomElement!: ElementRef;
  @ViewChild('containerSubTitleProjectWord', {static: true}) containerSubTitleProjectWord!: ElementRef;
  @ViewChild("videoEl", { static: true, read: ElementRef })
  video!: ElementRef; 

  faArrowRight = faArrowRight;
  faPlayCircle  = faPlayCircle;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const containerRef = this.containerRef.nativeElement;
      const videoElement = this.video.nativeElement;
      const textElement = this.headerTextElementRef.nativeElement;
      const containerSubTitleProjectWord = this.containerSubTitleProjectWord.nativeElement;
      const playVideoButon = this.playVideoButon.nativeElement;


      window.addEventListener('click', function(){
        playVideoButon.style.opacity="0"
      })

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(textElement,{
        scrollTrigger: {
          trigger: textElement,
          start: "top top",
          end: "+=2000",
          // markers: true,
          scrub: 1,
          pin: containerRef,
          onEnter: () => playVideoButon.classList.add("diplayOn"),
          onLeave: () => playVideoButon.classList.remove("diplayOn"),
          onEnterBack: () => playVideoButon.classList.add("diplayOn"),
          onLeaveBack: () => playVideoButon.classList.remove("diplayOn"),
        },
        scale:15,
        x: -50,
        transformOrigin: "center center", 
      });

      videoElement.load();
      document.addEventListener('mousedown', () => {
        videoElement.play().catch((error: any) => {
          console.log('play error', error);
          console.log('entra');
        });
      });  

      document.addEventListener('touchstart', () => {
        videoElement.play().catch((error: any) => {
          console.log('play error', error);
        });
      });

      if (window.innerWidth <= 768) {
        this.containerRef.nativeElement.style.display = 'none';
    }    
    }
  }

}






