import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string;
  descripcion: string;
  url: string;

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto (this.nombre, this.descripcion, this.url);
    this.proyectoService.save(proy).subscribe(
      data => {
        alert("proyecto creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
