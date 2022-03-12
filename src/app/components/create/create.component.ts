import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; 
import { ProjectService } from '../../services/project.service';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: String;
  public project: Project;
  faFolderOpen = faFolderOpen;
  

  constructor(
    private _projectService: ProjectService
  ) { 
    this.title= 'Create project';
    this.project = new Project('','','','','','')
  }

  ngOnInit(): void {
  }
   onSubmit(form: any){
     console.log(this.project);
   }
 

}
