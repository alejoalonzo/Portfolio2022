import { Component, OnInit } from '@angular/core';
// import { ProjectService } from 'src/app/services/project.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ChatGPTService } from '../../services/chatGPTservice';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message!:string;

  constructor(
    private chatgptSvc: ChatGPTService
  ) { }

  sendMessage(){
    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message='';
  }

  clearMessage(){
    location.reload();
  }

  ngOnInit(): void {
   // this.chatgptSvc.init();
  }

}
