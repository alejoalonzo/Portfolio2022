import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight, faPlayCircle  } from '@fortawesome/free-solid-svg-icons'; 
import { HomeComponent } from '../home/home.component';

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

  constructor(private elementRef: ElementRef, private componentTopAbout: HomeComponent) { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const containerRef = this.containerRef.nativeElement;
      const videoElement = this.video.nativeElement;
      const textElement = this.headerTextElementRef.nativeElement;
      const containerSubTitleProjectWord = this.containerSubTitleProjectWord.nativeElement;
      const playVideoButon = this.playVideoButon.nativeElement;
      
      let fontSizevar = 4.5;
      const maxFontSize = 65;
      const minFontSize = 4.5;

      let prevScrollPos = window.pageYOffset;

      window.addEventListener('click', function(){
        playVideoButon.style.opacity="0"
      })

      window.addEventListener("scroll", function() {

        let currentScrollPos = window.pageYOffset;
        const componentTop = textElement.getBoundingClientRect().top;

        if (componentTop <= 0){

          if (currentScrollPos > prevScrollPos) {
            fontSizevar += 0.5; 
          } else {
            fontSizevar -= 0.5;
          }
          if (fontSizevar >= 5 && fontSizevar <= 65) {  
            containerRef.style.position = "fixed";
            containerRef.style.top = "0";
            playVideoButon.style.position = "fixed";
          } 
          else {
            containerRef.style.position = "relative";
            playVideoButon.style.position = "relative";
          }

          if (fontSizevar > maxFontSize) {
            fontSizevar = maxFontSize;
          } else if (fontSizevar < minFontSize) {
            fontSizevar = minFontSize;
          }
        }
        
        prevScrollPos = currentScrollPos;
  
        textElement.style.fontSize =`${fontSizevar}em`;

        if(fontSizevar > 4.5){

          containerSubTitleProjectWord.style.opacity="0"; 
        }
        if(fontSizevar <= 4.5){
          containerSubTitleProjectWord.style.opacity="1"; 
        }

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






