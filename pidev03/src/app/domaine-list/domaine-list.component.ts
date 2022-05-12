import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../domaine';
import { DomaineService } from '../domaine.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}

@Component({
  selector: 'app-domaine-list',
  templateUrl: './domaine-list.component.html',
  styleUrls: ['./domaine-list.component.css']
})
export class DomaineListComponent implements OnInit {

  domaines: Domaine[];
  searchTerm = '';
  allDomaines: Domaine[] = [];

  constructor(private domaineService: DomaineService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDomaines();
  }

  ngOnChanges(search: string): void {
    this.domaineService.searchDomaine(search).subscribe(data =>{
    //  this.domaines=data;
    });
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

  search(value: string): void {
    this.domaines = this.allDomaines.filter((val) =>
      val.name_d.toLowerCase().includes(value)
    );
  }

}
