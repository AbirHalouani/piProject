import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../domaine';
import { DomaineService } from '../domaine.service';

@Component({
  selector: 'app-add-domaine',
  templateUrl: './add-domaine.component.html',
  styleUrls: ['./add-domaine.component.css']
})
export class AddDomaineComponent implements OnInit {

  domaine: Domaine = new Domaine();
  constructor(private domaineService: DomaineService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDomaine(){
    this.domaineService.addDomaine(this.domaine).subscribe( data =>{
      console.log(data);
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

}
