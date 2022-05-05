import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forum} from "./forum";

@Injectable({
  providedIn: 'root'
})
export class forumService {


  constructor(private http: HttpClient) {}

  public getForums(): Observable<forum[]> {
    return  this.http.get<forum[]>('http://localhost:8089/SpringMVC/forum/retrieve-all-Forums');
  }

  public addForum(forum : forum): Observable<forum> {
    return  this.http.post<forum>('http://localhost:8089/SpringMVC/forum/add-forum', forum);
  }

  public updateForum(forum : forum): Observable<forum> {
    return  this.http.put<forum>('http://localhost:8089/SpringMVC/forum/modify-forum', forum);
  }

  public deleteForum(idForum : any): Observable<void> {
    return  this.http.delete<void>(`http://localhost:8089/SpringMVC/forum/remove-forum/${idForum}`);
  }



}
