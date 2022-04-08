import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public title: String;

  constructor() {
    this.title= 'Get in touch';
   }

  ngOnInit(): void {
  }

}
