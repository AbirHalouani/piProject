import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./User";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUser(): Observable<User[]> {
    return  this.http.get<User[]>('http://localhost:8089/SpringMVC/User/retrieve-all-Users');
  }

  public addUser(user : User): Observable<User> {
    return  this.http.post<User>('http://localhost:8089/SpringMVC/User/add-User', user);
  }

  public updateUser(user : User): Observable<User> {
    return  this.http.put<User>('http://localhost:8089/SpringMVC/User/modify-User', user);
  }

  public deleteUser(idUser : number): Observable<void> {
    return  this.http.delete<void>(`http://localhost:8089/SpringMVC/User/remove-User/${idUser}`);
  }



}
