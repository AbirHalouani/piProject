import { Component, OnInit } from '@angular/core';
import { TravelAgency } from 'src/app/modules/travel-agency';
import{TravelAgencyService} from 'src/app/service/travel-agencyService/travel-agency.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-travel-agency',
  templateUrl: './update-travel-agency.component.html',
  styleUrls: ['./update-travel-agency.component.css']
})
export class UpdateTravelAgencyComponent implements OnInit {

 
  id!:number;
  travelAgency : TravelAgency=new TravelAgency();

  constructor(private travelAgencyService: TravelAgencyService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.travelAgency=new TravelAgency();
    this.id = this.route.snapshot.params['id'];
    this.travelAgencyService.getTravelAgencyById(this.id).subscribe(data=>{this.travelAgency=data;},error=>console.log(error));}

    onSubmit(travelAgency:TravelAgency){
      

      this.travelAgencyService.updateTravelAgencyById(this.id,travelAgency).subscribe(data =>{
        console.log(data)});

        this.router.navigate(['list-travelAgency']);
    }
}
