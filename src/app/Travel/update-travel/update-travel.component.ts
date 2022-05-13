import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel } from '../../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-travel',
  templateUrl: './update-travel.component.html',
  styleUrls: ['./update-travel.component.css']
})
export class UpdateTravelComponent implements OnInit {

  id!:number;
  travel : Travel=new Travel();

  constructor(private travelService: TravelService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.travel=new Travel();
    this.id = this.route.snapshot.params['id'];
    this.travelService.getTravelById(this.id).subscribe(data=>{this.travel=data;},error=>console.log(error));}

    onSubmit(travel:Travel){
      

      this.travelService.updateTravelById(this.id,travel).subscribe(data =>{
        console.log(data)});

         this.router.navigate(['list-travel']);
    }
  

}
