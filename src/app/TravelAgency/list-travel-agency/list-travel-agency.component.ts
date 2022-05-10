import { Component, OnInit } from '@angular/core';
import { TravelAgency } from 'src/app/modules/travel-agency';
import{TravelAgencyService} from 'src/app/service/travel-agencyService/travel-agency.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-travel-agency',
  templateUrl: './list-travel-agency.component.html',
  styleUrls: ['./list-travel-agency.component.css']
})
export class ListTravelAgencyComponent implements OnInit {

   
  travelAgencys: TravelAgency[] = [];
  constructor(private TravelAgencyService:TravelAgencyService,private router:Router) { }
 date :Date = new Date("2018/02/06");
  ngOnInit(): void {
  /*  this.travelAgencys=[{
      "idtravelAgency": 1,
      "destination": "DJERBA",
      "LastDate": this.date ,
     "status":"null",
      "departurePlace": "TUNIS",
      "confirmationStatus": false,
      "startDate": this.date ,
      },] */
    this.gettravelAgencys();
  }

  private gettravelAgencys(){
    this.TravelAgencyService.getTravelAgencyList().subscribe(data =>{
      console.log(data);
      this.travelAgencys=data ;});
  }

  updatetravelAgency(id:number){
    this.router.navigate(['update-travelAgency',id]);
  }

}
