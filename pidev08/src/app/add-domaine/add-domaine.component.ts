import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../domaine';
import { DomaineService } from '../domaine.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-domaine',
  templateUrl: './add-domaine.component.html',
  styleUrls: ['./add-domaine.component.css']
})
export class AddDomaineComponent implements OnInit {

  bookForm = new FormGroup({
    title: new FormControl(null, [
        Validators.required
    ]),
    description: new FormControl()
});

  

  domaine: Domaine = new Domaine();
  constructor(private domaineService: DomaineService, private router: Router) { }

  ngOnInit(): void {
  
 
 
  }

  saveDomaine(){
    this.domaineService.addDomaine(this.domaine).subscribe( data =>{
      console.log(data);
      Swal.fire("Hello Worldı fdgdf")
      this.goToDomaineList();
    },
    error => console.log(error));
  }

  goToDomaineList(){
    this.router.navigate(['/domaines']);
  }

  onSubmit(){

    console.log(this.domaine);
    this.saveDomaine();
  }

  simpleAlert(){
    Swal.fire("Hello Worldı fdgdf")
  }

  shouldShowTitleRequiredError() {

    const title = this.bookForm.controls.title;

    return title.touched && title.hasError('required');

}

}
