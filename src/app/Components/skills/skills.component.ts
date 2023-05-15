import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  
  constructor (private skillService: SkillService, private tokenService: TokenService){}
  isLogged = false;
  
  ngOnInit(): void{
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarSkills(): void{
    this.skillService.lista().subscribe(
      data =>{
        this.skill = data;
    })
  }
  
  delete(id:number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data =>{
          this.cargarSkills()
        }, err =>{
          alert ("no se pudo borrar la skill");
        })
  }}
  
  }
  