import { Component, OnInit } from '@angular/core';
import { Travel } from '../../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
travel:Travel=new Travel();
  constructor(private travelService:TravelService,private route : ActivatedRoute,private router:Router) { }
  id!:number;
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    

  }

  saveTravel(t:Travel)
  {
   /* this.travelService.addTravel(this.travel).subscribe(data =>{
      console.log(data)});*/

      this.travelService.affecterTravelToUser(this.id,t).subscribe(data =>{
        console.log(data)});


      
  }

  onSubmit(t:Travel)
  { t.users=[];
    this.travel=t ;
    console.log(this.travel);
    this.saveTravel(this.travel);
   
  }
goToTravelList()
{this.router.navigate(['/list-travel']);}
}
