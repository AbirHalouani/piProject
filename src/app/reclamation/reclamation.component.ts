import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamationsList: any[] = [];
  // questionsList: any[] = [];
  reclamationForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reclamationForm = this.fb.group({
      discription: [null, [Validators.required, Validators.minLength(5)]],
      date: [null, [Validators.required, Validators.minLength(5)]],
      typeReclamation: [null, [Validators.required, Validators.minLength(5)]],
      user_id: [null],
    });
  }
  addReclamation() {
    const val = this.reclamationForm.value;
    const { typeReclamation, discription, date, user_id } = val;
    
      this.apiService.addReclamation(discription, typeReclamation, date, user_id).subscribe((res) => {
        this.getReclamationList();
        this.router.navigateByUrl('reclamation');
      });
  }
  ngOnInit(): void {
    this.getReclamationList();
  }
  redirectTo(path: string) {
    location.href = path;
  }
  private getReclamationList() {
    this.apiService.getAllReclamations().subscribe((response: any[]) => {
      this.reclamationsList = response;
      console.log(this.reclamationsList);
    });
  }
  // private getQuestionsList() {
  //   this.apiService.getAllQuestions().subscribe((response: any[]) => {
  //     this.questionsList = response;
  //     console.log(this.questionsList);
  //   });
  // }
  // public modifierQuestion(questionId) {
    
  // }
  search($event: any) {
    const { value } = $event.target;
    if (!value) {
      this.getReclamationList();
      return;
    }
    this.reclamationsList = this.reclamationsList?.filter(function (item) {
      if (item.discription.includes(value)|| item.typeReclamation.includes(value)) return item;
    });
  }
  remove(reclamationId: any) {
    const index = this.reclamationsList.findIndex(
      (item) => item.idR === reclamationId
    );
    if (index !== -1)
      this.reclamationsList = this.reclamationsList.filter((el) => el.idR !== index);
    this.apiService.removeReclamation(reclamationId).subscribe((res) => {
      this.reclamationsList.splice(
        this.reclamationsList.indexOf(
          this.reclamationsList.filter((value) => value.idR === reclamationId)[0]
        ),
        1
      );
    });
    this.getReclamationList();
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
