import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  reponsesList: any[] = [];
  questionsList: any[] = [];
  reponseForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reponseForm = this.fb.group({
      text: [null, [Validators.required, Validators.minLength(5)]],
      idQuestion: [null],
    });
  }
  addReponse() {
    const val = this.reponseForm.value;
    const { text, idQuestion } = val;
    const index = (el: any) => el.idQuestion == idQuestion
    const item = this.questionsList[this.questionsList.findIndex(index)];
    console.log(item)
    if (text && item) {
      this.apiService.addReponse(text, item).subscribe((res) => {
        this.getReponsesList();
        this.router.navigateByUrl('reponses');
      });
    }
  }
  ngOnInit(): void {
    this.getQuestionsList();
    this.getReponsesList();
  }
  redirectTo(path: string) {
    location.href = path;
  }
  private getReponsesList() {
    this.apiService.getAllResponses().subscribe((response: any[]) => {
      this.reponsesList = response;
      console.log(this.reponsesList);
    });
  }
  private getQuestionsList() {
    this.apiService.getAllQuestions().subscribe((response: any[]) => {
      this.questionsList = response;
      console.log(this.questionsList);
    });
  }
  public modifierQuestion(questionId: any) {
    
  }
  search($event: any) {
    const { value } = $event.target;
    if (!value) {
      this.getReponsesList();
      return;
    }
    this.reponsesList = this.reponsesList?.filter(function (item) {
      if (item.text.includes(value)) return item;
    });
  }
  remove(reponseId: any) {
    const index = this.reponsesList.findIndex(
      (item) => item.idReponse === reponseId
    );
    if (index !== -1)
      this.reponsesList = this.reponsesList.filter((el) => el.idC !== index);
    this.apiService.removeReponse(reponseId).subscribe((res) => {
      this.reponsesList.splice(
        this.reponsesList.indexOf(
          this.reponsesList.filter((value) => value.idReponse === reponseId)[0]
        ),
        1
      );
    });
    this.getReponsesList();
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('reponses.pdf');
    });
  }

}
