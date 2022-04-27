import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Travel } from './travel';
@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private baseURL = "http://localhost:8089/SpringMVC/Travel/"
  constructor(private httpClient:HttpClient) { }

  getTravelList():Observable<Travel[]>
  {return this.httpClient.get<Travel[]>(`${this.baseURL+"afficherTravel"}`).pipe(response=>response);}

  addTravel(travel:Travel):Observable<Object>{
    return this.httpClient.post(`${this.baseURL +"add-Travel" }`,travel); 
  }
}
