import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public title: String;
  faArrowRight = faArrowRight;

  constructor() {
    this.title= 'Get in touch';
   }

  ngOnInit(): void {
  }

}
