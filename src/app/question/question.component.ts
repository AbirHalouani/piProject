import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})


export class QuestionComponent implements OnInit {
  questionsList: any[] = [];
  questionForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.questionForm = this.fb.group({
      text: [null, [Validators.required, Validators.minLength(5)]],
    });
  }
  addQuestion() {
    const val = this.questionForm.value;
    const { text } = val;
    if (text) {
      this.apiService.addQuestion(text).subscribe((res) => {
        this.getQuestionsList();
        this.router.navigateByUrl('questions');
      });
    }
  }
  ngOnInit(): void {
   
    this.getQuestionsList();
  }
  redirectTo(path: string) {
    location.href = path;
  }
  private getQuestionsList() {
    this.apiService.getAllQuestions().subscribe((response: any[]) => {
      this.questionsList = response;
      console.log(this.questionsList);
    });
  }
  public modifierQuestion(questionId: any) {
    
  }
  search($event: any ) {
    const { value } = $event.target;
    if (!value) {
      this.getQuestionsList();
      return;
    }
    this.questionsList = this.questionsList?.filter(function (item) {
      if (item.text.includes(value)) return item;
    });
  }
  remove(questionId: any) {
    const index = this.questionsList.findIndex(
      (item) => item.idQuestion === questionId
    );
    if (index !== -1)
      this.questionsList = this.questionsList.filter((el) => el.idC !== index);
    this.apiService.removeQuestion(questionId).subscribe((res) => {
      this.questionsList.splice(
        this.questionsList.indexOf(
          this.questionsList.filter((value) => value.idQuestion === questionId)[0]
        ),
        1
      );
    });
    this.getQuestionsList();
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
      PDF.save('questions.pdf');
    });
  }
}
