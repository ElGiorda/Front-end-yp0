import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proyecto } from "../model/proyectos";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ProyectoService {
    url:string = environment.URL + 'proyectos/'
    
    constructor(private httpClient: HttpClient){}

    public lista(): Observable<Proyecto[]>{
        return this.httpClient.get<Proyecto[]>(this.url + 'lista');
    }

    public detail(id: number): Observable<Proyecto>{
        return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
    }
    
    public save(skill: Proyecto): Observable<any>{
        return this.httpClient.post<any>(this.url + 'create', skill);
    }
    
    public update(id: number, skill: Proyecto): Observable<any>{
        return this.httpClient.put<any>(this.url + `update/${id}`, skill);
    }
    
    public delete(id: number): Observable<any>{
        return this.httpClient.delete(this.url + `delete/${id}`);
    }
    
}