import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-topencabezado',
  templateUrl: './topencabezado.component.html',
  styleUrls: ['./topencabezado.component.css']
})
export class TopencabezadoComponent {
  isLogged = false;
  
  constructor(private router: Router, private tokenService: TokenService){}
  
  ngOnInit():void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  
    onLogOut():void {
      this.tokenService.logOut();
      window.location.reload(); 
    }
  
    login(){
     this.router.navigate(['/login']);
    }
  }
