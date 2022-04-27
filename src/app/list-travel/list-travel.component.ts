import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import{TravelService} from '../travel.service'

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css']
})
export class ListTravelComponent implements OnInit {
  
  Travels: Travel[] = [];
  constructor(private travelService: TravelService ) { }
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
}
