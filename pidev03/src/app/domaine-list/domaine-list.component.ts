import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../domaine';
import { DomaineService } from '../domaine.service';

@Component({
  selector: 'app-domaine-list',
  templateUrl: './domaine-list.component.html',
  styleUrls: ['./domaine-list.component.css']
})
export class DomaineListComponent implements OnInit {

  domaines: Domaine[];

  constructor(private domaineService: DomaineService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDomaines();
  }
  private getDomaines(){
    this.domaineService.getDomaineList().subscribe(data =>{
      this.domaines=data;
    });
  }

  updateDomaine(id_d : number){
    this.router.navigate(['update-domaine', id_d]);
  }

  deleteDomaine(id_d: number){
    this.domaineService.deleteDomaine(id_d).subscribe(data => {
      console.log(data);
      this.getDomaines();
    })
  }

}
