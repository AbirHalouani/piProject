import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  constructor(private http: HttpClient) {}
  getAllQuestions(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.apiUrl}/ProjectMVC/Question/getQuestionList`
    );
  }
  getAllResponses(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.apiUrl}/ProjectMVC/Reponse/getReponseList`
    );
  }
  getAllAvis(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.apiUrl}/ProjectMVC/Avis/getAvisList`
    );
  }
  getAllReclamations(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.apiUrl}/ProjectMVC/Reclamation/getAllReclamations`
    );
  }
  getStats(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.apiUrl}/ProjectMVC/Question/getQuestionsList`
    );
  }
  removeQuestion(id: string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}/ProjectMVC/Question/deleteQuestion/${id}`
    );
  }
  addQuestion(text: string) {
    return this.http.post<any>(
      `${environment.apiUrl}/ProjectMVC/Question/addQuestion`,
      { text }
    );
  }
  addReclamation(
    discription: string,
    typeReclamation: string,
    date: Date,
    user_id: string = ""
  ) {
    return this.http.post<any>(
      `${environment.apiUrl}/ProjectMVC/Reclamation/addReclamation`,
      { discription, typeReclamation, date, user_id }
    );
  }
  removeReponse(id: string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}/ProjectMVC/Reponse/deleteReponse/${id}`
    );
  }
  removeReclamation(id: string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}/ProjectMVC/Reclamation/deleteReclamation/${id}`
    );
  }
  addReponse(text: string, quest: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/ProjectMVC/Reponse/addReponse`,
      { text, question: quest }
    );
  }
}
