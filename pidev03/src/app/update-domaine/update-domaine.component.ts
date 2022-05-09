import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domaine } from '../domaine';
import { DomaineService } from '../domaine.service';

@Component({
  selector: 'app-update-domaine',
  templateUrl: './update-domaine.component.html',
  styleUrls: ['./update-domaine.component.css']
})
export class UpdateDomaineComponent implements OnInit {

  id_d: number;
  domaine: Domaine = new Domaine();
  
  constructor(private domaineService: DomaineService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.id_d = this.route.snapshot.params['id_d'];

    this.domaineService.getDomaineById(this.id_d).subscribe(data => {
      this.domaine = data;
    }, error => console.log(error));
    
    }
  
  onSubmit(){
    this.domaineService.updateDomaine(this.id_d, this.domaine).subscribe( data =>{
      this.goToDomaineList();
    },
    error => console.log(error));
    
  }

  goToDomaineList(){
    this.router.navigate(['/domaines']);
  }
    
  }

