import { Component } from '@angular/core';

import {UserService} from "./User.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "./User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users!: User[];
  public editUsers : User;
  public deleteUsers: User;

  constructor(private usersService : UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.usersService.getUser().subscribe(
      (response:User[]) => {
        this.users = response ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
public onAddUser(addForm: NgForm): void {
    document.getElementById('add-User-form').click();
this.usersService.addUser(addForm.value).subscribe(
  (response:User)=> {
    console.log(response);
    this.getUsers();
  },
  (error : HttpErrorResponse) => {
    alert(error.message);
  }
);
}

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const userrr of this.users) {
      if (userrr.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || userrr.cinUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || userrr.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || userrr.adressUser.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(userrr);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }


  public onUpdateUser(users: User): void {
    this.usersService.updateUser(users).subscribe(
      (response:User)=> {
        console.log(response);
        this.getUsers();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(idUser: number): void {
    this.usersService.deleteUser(idUser).subscribe(
      (response:void)=> {
        console.log(response);
        this.getUsers();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



public onOpenModal(users : User, mode: string) :void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add') {
      button.setAttribute('data-target','#addUserModel');
    }
  if(mode === 'edit') {
    this.editUsers = users;
    button.setAttribute('data-target','#updateUserModel');
  }
  if(mode === 'delete') {
    this.deleteUsers = users;
    button.setAttribute('data-target','#deleteUserModel');
  }

  container.appendChild(button);
  button.click();
}

}
