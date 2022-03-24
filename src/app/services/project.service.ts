import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Global } from "./global";
import { Content } from "@angular/compiler/src/render3/r3_ast";

@Injectable()
export class ProjectService{
    public url: String;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    testsService(){
        return 'Probando la api de Angular'
    }
    saveProject (project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url+'/save-project',params , {headers:headers});

    }

    getProject(): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url+'/projects',{headers:headers});
    }
}
