import { Component, Input } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  
  @Input() title!: string;
  @Input() title2!: string;
  @Input() subTitle!: string;
  @Input() subTitle2!: string;

  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;
  @ViewChild('header') containerRefHeader!: ElementRef;
  @ViewChild("video", { static: true, read: ElementRef })
  videoHeader!: ElementRef;


  constructor() { }

  ngAfterViewInit(): void {
    if (this.containerRefHeader){
      const header = this.containerRefHeader.nativeElement;
      const videoElement = this.videoHeader.nativeElement;
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
