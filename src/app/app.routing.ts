import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
//import { homedir } from "os";


const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about-me', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'create', component:CreateComponent},
    {path: 'project/:id', component: DetailComponent},
    {path: '**', component:ErrorComponent}
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);