import { Component, OnInit } from '@angular/core';
// import { ProjectService } from 'src/app/services/project.service';
import { ChatGPTService } from '../../services/chatGPTservice';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message!:string;

  constructor(
    private chatgptSvc: ChatGPTService,
    private reCaptchaV3Service: ReCaptchaV3Service
  ) { }

  sendMessage(){
    this.reCaptchaV3Service.execute(environment.recaptcha.siteKey).subscribe((token) => {
      this.chatgptSvc.getDataFromOpenAI(this.message, token);
      // console.log('Token de reCAPTCHA:', token);
      this.message = '';
    })
  }

  clearMessage(){
    location.reload();
  }

  ngOnInit(): void {
   // this.chatgptSvc.init();
  }

}
