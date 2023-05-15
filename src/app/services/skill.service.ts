import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skill } from "../model/skills";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class SkillService {
    url:string = environment.URL + 'skill/'
    
    constructor(private httpClient: HttpClient){}

    public lista(): Observable<Skill[]>{
        return this.httpClient.get<Skill[]>(this.url + 'lista');
    }

    public detail(id: number): Observable<Skill>{
        return this.httpClient.get<Skill>(this.url + `detail/${id}`);
    }
    
    public save(skill: Skill): Observable<any>{
        return this.httpClient.post<any>(this.url + 'create', skill);
    }
    
    public update(id: number, skill: Skill): Observable<any>{
        return this.httpClient.put<any>(this.url + `update/${id}`, skill);
    }
    
    public delete(id: number): Observable<any>{
        return this.httpClient.delete(this.url + `delete/${id}`);
    }
    
}