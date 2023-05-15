import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void{
  this.cargarProyectos();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
}

cargarProyectos(): void{
  this.proyectoService.lista().subscribe(
    data =>{
      this.proyecto = data;
  })
}

delete(id:number){
  if(id != undefined){
    this.proyectoService.delete(id).subscribe(
      data =>{
        this.cargarProyectos()
      }, err =>{
        alert ("no se pudo borrar el proyecto");
      })
}}
}
