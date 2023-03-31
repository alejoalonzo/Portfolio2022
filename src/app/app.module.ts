import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule, ExtraOptions} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ParticleAnimationComponent } from './components/particle-animation/particle-animation.component';
import { MegaTextVideoComponent } from './components/mega-text-video/mega-text-video.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatGPTService } from './services/chatGPTservice';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    CreateComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    ParticleAnimationComponent,
    MegaTextVideoComponent,
    ChatComponent,
    FooterComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    FontAwesomeModule, 
    RouterModule.forRoot(appRoutingProviders, routerOptions)
  ],
  providers: [
    appRoutingProviders,
    ChatGPTService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


