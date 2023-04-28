import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mega-text-video',
  templateUrl: './mega-text-video.component.html',
  styleUrls: ['./mega-text-video.component.scss']
})
export class MegaTextVideoComponent implements AfterViewInit {
  @ViewChild('headerText', { static: false }) headerTextElementRef!: ElementRef<SVGTextElement>;
  @ViewChild('svgElement', { static: false }) svgElementRef!: ElementRef<SVGElement>;
  @ViewChild('headerE1') containerRef!: ElementRef;
  @ViewChild('headerText') zoomElement!: ElementRef;
  @ViewChild('containerSubTitleProjectWord', {static: true}) containerSubTitleProjectWord!: ElementRef;
  @ViewChild("videoEl", { static: true, read: ElementRef })
  video!: ElementRef;

  faArrowRight = faArrowRight;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const videoElement = this.video.nativeElement;
      const textElement = this.headerTextElementRef.nativeElement;
      const containerSubTitleProjectWord = this.containerSubTitleProjectWord.nativeElement;
      let fontSizevar = 4.5;
      let prevScrollPos = window.pageYOffset;
      let lockScroll = false; 

      window.addEventListener("scroll", function() {

        let currentScrollPos = window.pageYOffset;
        const componentTop = textElement.getBoundingClientRect().top;
  

        if (componentTop <= 0){
          if (currentScrollPos > prevScrollPos) {
            fontSizevar += 0.2; 
            //videoElement.classList.add('');
            
          } else {
            fontSizevar -= 0.25; 
          }
        }
        
        prevScrollPos = currentScrollPos;
  
        if (componentTop <= 0 && fontSizevar <= 50) {
          lockScroll = true;
          
        } else {
          lockScroll = false;
        }
        if(!lockScroll){

        }        

        textElement.style.fontSize =`${fontSizevar}em`;

        if(fontSizevar >= 5.5){

          containerSubTitleProjectWord.style.opacity="0"; 
        }
        if(fontSizevar < 5.5){
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
      
    }

  }

}






