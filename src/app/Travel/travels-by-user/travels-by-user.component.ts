import { Component, OnInit } from '@angular/core';
import { Travel } from '../../modules/travel';
import { ActivatedRoute } from '@angular/router';
import{TravelService} from 'src/app/service/travelService/travel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-travels-by-user',
  templateUrl: './travels-by-user.component.html',
  styleUrls: ['./travels-by-user.component.css']
})
export class TravelsByUserComponent implements OnInit {
  p: number = 1;
  id!:number;
  idTravel!:number;
  Travels: Travel[] = [];
  constructor(private travelService: TravelService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.idTravel= this.route.snapshot.params['idTravel'];
    this.getTravels();
  }
  private getTravels(){
    this.travelService.getTravelByIdUser(this.id).subscribe(data =>{
      console.log(data);
      this.Travels=data ;});
  }

  
  travelpartner(idTravel:number){
    this.router.navigate(['list-travelPartner',this.id,idTravel]);
  }


}
