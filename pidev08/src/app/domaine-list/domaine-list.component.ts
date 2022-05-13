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
  name_d : any ;

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

  Search(){
    if (this.name_d == ""){
      this.ngOnInit();
     }
     else{
      this.domaines=this.domaines.filter(res =>{
        return res.name_d.toLocaleLowerCase().match (this.name_d.toLocaleLowerCase());
      });
    }
  }

  key='id';
  reverse : boolean = false; 
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  

}
