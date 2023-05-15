import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { NewEducacionComponent } from './Components/educacion/new-educacion.component';
import { EditEducacionComponent } from './Components/educacion/edit-educacion.component';
import { EncabezadoComponent } from './Components/encabezado/encabezado.component';
import { EditEncabezadoComponent } from './Components/encabezado/edit-encabezado.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { NewProyectosComponent } from './Components/proyectos/new-proyectos.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EditSkillsComponent } from './Components/skills/edit-skills.component';
import { NewSkillsComponent } from './Components/skills/new-skills.component';
import { TopencabezadoComponent } from './Components/topencabezado/topencabezado.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditProyectosComponent } from './Components/proyectos/edit-proyectos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EditAcercaDeComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EncabezadoComponent,
    EditEncabezadoComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    HomeComponent,
    LoginComponent,
    ProyectosComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    ProyectosComponent,
    SkillsComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    TopencabezadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
