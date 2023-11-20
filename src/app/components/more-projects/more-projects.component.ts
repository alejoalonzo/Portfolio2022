import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.scss'],
  providers: [ProjectService]
})
export class MoreProjectsComponent implements OnInit {
  public pro: Project[] = [];
  public url: String;
  public changeClass:boolean;

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