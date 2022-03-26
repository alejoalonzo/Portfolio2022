import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { query, style } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public pro: Project[] = [];
  public url: String;
  constructor(
    private _projectService: ProjectService

  ) {
    this.url= Global.url;
   }

  ngOnInit(): void {
    this.getProject();
  }
  getProject(){
    this._projectService.getProject().subscribe(
      response=>{
        if(response.projects){
          this.pro = response.projects;
          console.log(response);
        }
        
      }
    )
  }



}
//1Z2E76E20475543766