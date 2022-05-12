import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from './domaine';
@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private baseURL="http://localhost:8090/SpringMVC/d/domaines";
 
  constructor(private httpClient: HttpClient) { }

  getDomaineList(): Observable<Domaine[]>{
    return this.httpClient.get<Domaine[]>(`${this.baseURL}`);
  }

  addDomaine(domaine: Domaine): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, domaine);
  }

  getDomaineById(id_d: number): Observable<Domaine>{
    return this.httpClient.get<Domaine>(`${this.baseURL}/${id_d}`);
  }

  updateDomaine(id_d: number, domaine: Domaine): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_d}`, domaine);
  }
  

  deleteDomaine(id_d: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_d}`);
  }

  searchDomaine(name_d: string): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${name_d}`);
  }

}
