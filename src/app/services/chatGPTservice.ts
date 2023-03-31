import { Injectable } from "@angular/core";
import { filter, map } from "rxjs";
import { Configuration, OpenAIApi } from "openai";
import { environment } from "../../environments/environment";
import { from } from "rxjs";
import { ProjectService } from './project.service';



const APIKEY = environment.apiKey;

declare var $:any;//Bootstrap-To work with JQuery

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey:APIKEY
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string){

    from(this.openai.createCompletion({
    
      model:'text-davinci-003',
      prompt:text,
      max_tokens:256,
      temperature:0.7

    })).pipe(
        
      filter(resp=>!!resp && !!resp.data),
      map(resp=>resp.data),
      filter((data:any)=>(
        
        data.choices && data.choices.length > 0 && data.choices[0].text
      
      )),
      map(data=>data.choices[0].text)

    ).subscribe(data=>{
        $('.response').append(`
          <ul class="list-group mb-2">
          <li class="list-group-item bg-primary text-light">${data}</li><br>
          </ul>
        `)
    })

  }


}
/*import { Injectable } from "@angular/core";
import { filter, map } from "rxjs";
import { Configuration, OpenAIApi } from "openai";
import { from } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Global } from "./global";


declare var $:any;//Bootstrap-To work with JQuery

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {

  private apiKey!: string;
  public url!: String;

  constructor(private http: HttpClient) {
    this.http.get<string>('http://127.0.0.1:3700/api/openai-key').subscribe(apiKey => {
      this.apiKey = apiKey;
    });
  }

  readonly configuration = new Configuration({
    apiKey:this.apiKey
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string){

    from(this.openai.createCompletion({
    
      model:'text-davinci-003',
      prompt:text,
      max_tokens:256,
      temperature:0.7

    })).pipe(
        
      filter(resp=>!!resp && !!resp.data),
      map(resp=>resp.data),
      filter((data:any)=>(
        
        data.choices && data.choices.length > 0 && data.choices[0].text
      
      )),
      map(data=>data.choices[0].text)

    ).subscribe(data=>{
        $('.response').append(`
          <ul class="list-group mb-2">
          <li class="list-group-item bg-primary text-light">${data}</li><br>
          </ul>
        `)
    })

  }


}*/
