import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'], 
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {

  public project!: Project;
  public url: String;
  faGitHub = faGithub;
  faYoutube = faYoutube;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
      this.url = Global.url;
      this.confirm = false;
    }


  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params['id'];
      this.getProject(id);
    })
  }

  getProject(id:any){
    this._projectService.getProjectOne(id).subscribe(response=>{
      this.project = response.project;
    })
  }
  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(response=>{
      if(response.project){
        this._router.navigate(['/projects']);
      }
    })
  }
  setConfirm(confirm: boolean){
    this.confirm = confirm
  }

}
