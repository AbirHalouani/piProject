import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Travel } from 'src/app/modules/travel';
import { User } from 'src/app/modules/user';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private baseURL = "http://localhost:8089/SpringMVC/Travel/"
  constructor(private httpClient:HttpClient ) { }

  getTravelList():Observable<Travel[]>
  {return this.httpClient.get<Travel[]>(`${this.baseURL+"afficherTravel"}`).pipe(response=>response);}

  addTravel(travel:Travel):Observable<Object>{
    return this.httpClient.post(`${this.baseURL +"add-Travel" }`,travel); 
  }

  getTravelById(id:number):Observable<Travel>
  {return this.httpClient.get<Travel>(`${this.baseURL+"findTravelsByID"}/${id}`);}

  updateTravelById(id:number,travel : Travel):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL+"update-Travel-byId"}/${id}`,travel);
  }

  getTravelByIdUser(id:number):Observable<Travel[]>
  {return this.httpClient.get<Travel[]>(`${this.baseURL+"findTravelsByUser"}/${id}`).pipe(response=>response);}

  affecterTravelToUser(id:number,travel : Travel):Observable<Object>
  {return this.httpClient.put(`${this.baseURL+"add-TravelAndUser"}/${id}`,travel);}

  getTravelPartnerList(idUser:number, idTravel:number):Observable<User[]>
  {return this.httpClient.get<User[]>(`${this.baseURL+"findTravelPartner"}/${idUser}/${idTravel}`).pipe(response=>response);}

  blockDestination(id:string):Observable<Object>
  {return this.httpClient.put(`${this.baseURL+"blockTravelByDestinaton"}/${id}`,null);}


  verifyDestination():Observable<Object>
  {return this.httpClient.get(`${this.baseURL+"blockDestination"}`);}

  
  statistique():Observable<any>
  {return this.httpClient.get(`${this.baseURL+"statistic"}`);}

  getImage(imageUrl: string): Observable<Blob> { return this.httpClient.get(imageUrl, { responseType: 'blob' }); }
joinT(id:number,idTravel:number):Observable<Object>
{return this.httpClient.post(`${this.baseURL+"addUserToTravel"}/${id}/${idTravel}`,null);}
  
}
