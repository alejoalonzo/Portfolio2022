import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { faArrowUp, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('webDeveloper') webDeveloper!: ElementRef;
  @ViewChild('fieldScrollAnimation') fieldScrollAnimation!: ElementRef;

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;

  constructor() { 
  }
  
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.moveWebDeveloperDown();
  }

  moveWebDeveloperDown(): void {// move text down
    if (window.innerWidth >= 768){
      let originalPosition: string | null = null;
    
      window.addEventListener('scroll', () => {
        const posTop = document.documentElement.scrollTop;
        if (posTop > 0 && this.webDeveloper) {
          if (originalPosition === null) {
            originalPosition = this.webDeveloper.nativeElement.style.bottom;
          }
          this.webDeveloper.nativeElement.style.transition = "bottom 0.3s ease";
          this.webDeveloper.nativeElement.style.bottom = "-50px";
        } else {
          if (originalPosition !== null) {
            this.webDeveloper.nativeElement.style.transition = "bottom 0.3s ease";
            this.webDeveloper.nativeElement.style.bottom = originalPosition;
            this.fieldScrollAnimation.nativeElement.style.display = 'block';
            originalPosition = null;
          }
        }
      });
    }

  }
  hideMouseScroolAnimation() {
    this.fieldScrollAnimation.nativeElement.style.display = 'none';
  }
}