import { Component, Input, OnInit  } from '@angular/core';
import { ICarouselItem } from './slider-metadata';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  // Custom properties
  @Input() height = 600;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] =[];
  
  // Final properties
  public finalHeight: string| number=0;
  public currentPositionCarrousel: number=0;

  constructor (){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`
  }

  ngOnInit(): void {
    this.items.map((i, index)=>{
        i.id= index;
        i.marginLeft=0;
    })
  }

  setCurrentPosition (position:number){
    this.currentPositionCarrousel = position;
    let item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = -100 * position;
    }
  }
  
  setNext(){
    let finalPercentage =0;
    let nextPosition = this.currentPositionCarrousel + 1;
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    }else{
      nextPosition = 0;
    }
    let item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = finalPercentage;
    }
    this.currentPositionCarrousel = nextPosition;
  }

  setBack(){
    let finalPercentage =0;
    let backPosition = this.currentPositionCarrousel - 1;
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;
    }else{
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    let item = this.items.find(i => i.id === 0);
    if (item) {
      item.marginLeft = finalPercentage;
    }
    this.currentPositionCarrousel = backPosition;
  }
}