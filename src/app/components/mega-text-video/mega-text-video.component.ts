import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mega-text-video',
  templateUrl: './mega-text-video.component.html',
  styleUrls: ['./mega-text-video.component.scss']
})
export class MegaTextVideoComponent implements AfterViewInit {
  @ViewChild('headerE1') containerRef!: ElementRef;
  @ViewChild('headerText') zoomElement!: ElementRef;
  @ViewChild("videoEl", { static: true, read: ElementRef })
  video!: ElementRef;
  faArrowRight = faArrowRight;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const header = this.containerRef.nativeElement;
      const headerText = this.zoomElement.nativeElement;
      const videoElement = this.video.nativeElement;
      const videoHeight = videoElement.offsetHeight;
      const headerHeight = header.offsetHeight;
  
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const scrollBottom = scrollTop + window.innerHeight;
        const headerBottom = header.offsetTop + headerHeight;
  
        if (scrollTop < headerBottom && scrollBottom > header.offsetTop) {
          const scrollPercentage = (scrollBottom - header.offsetTop) / (videoHeight - headerHeight);
          const scale = 1 + (scrollPercentage * 0.5);
  
          headerText.style.transform = `scale(${scale})`;
        } else {
          headerText.style.transform = 'scale(1)';
        }
      });
  
      videoElement.load();
      document.addEventListener('mousedown', () => {
        videoElement.play().catch((error: any) => {
          console.log('play error', error);
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






