import { Component, OnInit } from '@angular/core';
import { faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

}
