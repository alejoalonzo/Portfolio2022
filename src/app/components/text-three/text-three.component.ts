import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TextThreeService } from 'src/app/services/text-three.service';

@Component({
  selector: 'app-text-three',
  templateUrl: './text-three.component.html',
  styleUrls: ['./text-three.component.scss']
})
export class TextThreeComponent implements OnInit {

  @ViewChild('renderCanvas',{static:true}) public renderCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild('magicContainer') magicContainer!: ElementRef<HTMLElement>;

  constructor(private textThreeComponent: TextThreeService) { }

  ngOnInit(): void {
    //this.textThreeComponent.testsService()
    this.textThreeComponent.preload(this.renderCanvas)
    //this.textThreeComponent.animate()
  }

}
