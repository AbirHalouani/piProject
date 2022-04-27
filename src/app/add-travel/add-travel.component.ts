import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import{TravelService} from '../travel.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
travel:Travel=new Travel();
  constructor(private travelService:TravelService,private router:Router) { }

  ngOnInit(): void {
  }

  saveTravel(t:Travel)
  {
    this.travelService.addTravel(this.travel).subscribe(data =>{
      console.log(data)});
  }

  onSubmit(t:Travel)
  {
    this.travel=t ;
    console.log(this.travel);
    this.saveTravel(this.travel);
  }
goToTravelList()
{this.router.navigate(['/list-travel']);}
}
