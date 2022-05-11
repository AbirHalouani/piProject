import { Component, OnInit } from '@angular/core';
import { Travel } from '../../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css']
})
export class ListTravelComponent implements OnInit {
  p: number = 1;
  Travels: Travel[] = [];
  constructor(private travelService: TravelService , private router :Router) { }
 date :Date = new Date("2018/02/06");
  ngOnInit(): void {
  /*  this.Travels=[{
      "idTravel": 1,
      "destination": "DJERBA",
      "LastDate": this.date ,
     "status":"null",
      "departurePlace": "TUNIS",
      "confirmationStatus": false,
      "startDate": this.date ,
      },] */
    this.getTravels();
  }

  private getTravels(){
    this.travelService.getTravelList().subscribe(data =>{
      console.log(data);
      this.Travels=data ;});
  }

  updateTravel(id:number){
    this.router.navigate(['update-travel',id]);
  }

  block(d:string)
  {this.travelService.blockDestination(d).subscribe(data =>{
    console.log(data);})}

    verifySecurity()
    {this.travelService.verifyDestination().subscribe(data =>{
      console.log(data);})}
}
