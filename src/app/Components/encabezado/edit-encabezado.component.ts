import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent implements OnInit {

  persona: Persona = null;
  
    constructor (private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imgService:ImageService) { }
    
        ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.detail(id).subscribe(
        data =>{
          this.persona = data;
        }, err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        })
    }
  
   onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    Promise.all([
      this.imgService.getImagenperfil(),
      this.imgService.getImagenbaner()
    ]).then(()=>{
    this.persona.imgperfil = this.imgService.urlperfil;
    this.persona.imgbaner = this.imgService.urlbaner;
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    });
  });
}
  
   uploadImagenbaner($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const nameperfil = "baner_" + id;
    this.imgService.uploadImagenbaner($event, nameperfil)
   }
   uploadImagenperfil($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const namebaner = "perfil_" + id;
    this.imgService.uploadImagenperfil($event, namebaner)
   }

  }
  