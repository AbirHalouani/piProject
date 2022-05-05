import { Component, OnInit } from '@angular/core';

import {forumService} from "./forum.service";
import {HttpErrorResponse} from "@angular/common/http";
import {forum} from "./forum";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class forumComponent {

  public forums!: forum[];
  public editForums : forum;
  public deleteForums: forum;

  constructor(private forumsService : forumService) {}

  ngOnInit() {
    this.getForums();
  }

  public getForums(): void {
    this.forumsService.getForums().subscribe(
      (response:forum[]) => {
        this.forums = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
public onAddForum(addForm: NgForm): void {
    document.getElementById('add-User-form').click();
this.forumsService.addForum(addForm.value).subscribe(
  (response:forum)=> {
    console.log(response);
    this.getForums();
  },
  (error : HttpErrorResponse) => {
    alert(error.message);
  }
);
}

  public searchForums(key: string): void {
    console.log(key);
    const results: forum[] = [];
    for (const forumm of this.forums) {
      if (
         forumm.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || forumm.author.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(forumm);
      }
    }
    this.forums = results;
    if (results.length === 0 || !key) {
      this.getForums();
    }
  }


  public onUpdateForum(forums: forum): void {
    this.forumsService.updateForum(forums).subscribe(
      (response:forum)=> {
        console.log(response);
        this.getForums();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteForum(idForum: number): void {
    this.forumsService.deleteForum(idForum).subscribe(
      (response:void)=> {
        console.log(response);
        this.getForums();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



public onOpenModal(forums : forum, mode: string) :void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add') {
      button.setAttribute('data-target','#addUserModel');
    }
  if(mode === 'edit') {
    this.editForums = forums;
    button.setAttribute('data-target','#updateUserModel');
  }
  if(mode === 'delete') {
    this.deleteForums = forums;
    button.setAttribute('data-target','#deleteUserModel');
  }

  container.appendChild(button);
  button.click();
}
}
