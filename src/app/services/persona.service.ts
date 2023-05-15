import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:string = environment .URL + 'personas/' ;

  constructor(private httpClient:HttpClient) {}

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url+'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `detail/${id}`);  
  }

  public update(id: number, experiencia: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }
   
}
