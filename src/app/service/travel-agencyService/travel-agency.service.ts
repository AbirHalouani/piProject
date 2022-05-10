import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TravelAgency } from 'src/app/modules/travel-agency';
@Injectable({
  providedIn: 'root'
})
export class TravelAgencyService {

  private baseURL = "http://localhost:8089/SpringMVC/TravelAgency/"
  constructor(private httpClient:HttpClient ) { }

  getTravelAgencyList():Observable<TravelAgency[]>
  {return this.httpClient.get<TravelAgency[]>(`${this.baseURL+"afficherTravelAgency"}`).pipe(response=>response);}

  addTravelAgency(TravelAgency:TravelAgency):Observable<Object>{
    return this.httpClient.post(`${this.baseURL +"add-TravelAgency" }`,TravelAgency); 
  }

  getTravelAgencyById(id:number):Observable<TravelAgency>
  {return this.httpClient.get<TravelAgency>(`${this.baseURL+"findTravelAgencysByID"}/${id}`);}

  updateTravelAgencyById(id:number,TravelAgency : TravelAgency):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL+"update-TravelAgency-byId"}/${id}`,TravelAgency);
  }
}
