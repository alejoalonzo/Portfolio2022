import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mega-text-video',
  templateUrl: './mega-text-video.component.html',
  styleUrls: ['./mega-text-video.component.scss']
})
export class MegaTextVideoComponent implements AfterViewInit {
  @ViewChild('headerE1') containerRef!: ElementRef;
  @ViewChild("videoEl", { static: true, read: ElementRef })
  video!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const videoElement = this.video.nativeElement;
      videoElement.load(); 
      document.addEventListener("mousedown", () => {
        videoElement.play().catch((error: any) => {
          console.log("play error", error);
        });
      });
      document.addEventListener("touchstart", () => {
        videoElement.play().catch((error: any) => {
          console.log("play error", error);
        });
      });
    }
  }
}






