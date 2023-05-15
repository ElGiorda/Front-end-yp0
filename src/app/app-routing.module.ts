import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';
import { NewEducacionComponent } from './Components/educacion/new-educacion.component';
import { EditEducacionComponent } from './Components/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { EditEncabezadoComponent } from './Components/encabezado/edit-encabezado.component';
import { EditSkillsComponent } from './Components/skills/edit-skills.component';
import { NewSkillsComponent } from './Components/skills/new-skills.component';
import { NewProyectosComponent } from './Components/proyectos/new-proyectos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaexp',component:NewExperienciaComponent},
  {path: 'editexp/:id',component: EditExperienciaComponent},
  {path: 'nuevaeduc',component:NewEducacionComponent}, 
  {path: 'editeduc/:id',component: EditEducacionComponent},
  {path: 'editencabezado/:id',component:EditEncabezadoComponent},
  {path: 'editacercade/:id',component: EditAcercaDeComponent},
  {path: 'newskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'newproyecto', component: NewProyectosComponent},
  {path: 'editproyecto/:id', component: NewProyectosComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
