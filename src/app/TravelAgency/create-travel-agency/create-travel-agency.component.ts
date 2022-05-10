import { Component, OnInit } from '@angular/core';
import { TravelAgency } from 'src/app/modules/travel-agency';
import{TravelAgencyService} from 'src/app/service/travel-agencyService/travel-agency.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-travel-agency',
  templateUrl: './create-travel-agency.component.html',
  styleUrls: ['./create-travel-agency.component.css']
})
export class CreateTravelAgencyComponent implements OnInit {
  travelAgency:TravelAgency=new TravelAgency();
  constructor(private TravelAgencyService:TravelAgencyService,private router:Router) { }

  ngOnInit(): void {
  }

  saveTravelAgency(t:TravelAgency)
  {
    this.TravelAgencyService.addTravelAgency(this.travelAgency).subscribe(data =>{
      console.log(data)});
  }

  onSubmit(t:TravelAgency)
  {
    this.travelAgency=t ;
    console.log(this.travelAgency);
    this.saveTravelAgency(this.travelAgency);
   
  }
goToTravelAgencyList()
{this.router.navigate(['/list-TravelAgency']);}
}

