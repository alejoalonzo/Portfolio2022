import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { query, style } from '@angular/animations';
import { ICarouselItem } from '../slider/slider-metadata'
import { SLIDER_DATA } from '../slider/slider.const'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public pro: Project[] = [];
  public url: String;
  public changeClass:boolean;
  public sliderData: ICarouselItem[] = SLIDER_DATA;

  constructor(
    private _projectService: ProjectService

  ) {
    this.url= Global.url;
    this.changeClass =false;
   }

  ngOnInit(): void {
    this.getProject();
  }
  getProject(){
    this._projectService.getProject().subscribe(
      response=>{
        if(response.projects){
          this.pro = response.projects;
        }
        
      }
    )
  }



}
//1Z2E76E20475543766