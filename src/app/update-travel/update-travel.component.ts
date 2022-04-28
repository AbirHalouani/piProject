import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel } from '../travel';
import{TravelService} from '../travel.service';

@Component({
  selector: 'app-update-travel',
  templateUrl: './update-travel.component.html',
  styleUrls: ['./update-travel.component.css']
})
export class UpdateTravelComponent implements OnInit {

  id!:number;
  travel : Travel=new Travel();

  constructor(private travelService: TravelService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.travel=new Travel();
    this.id = this.route.snapshot.params['id'];
    this.travelService.getTravelById(this.id).subscribe(data=>{this.travel=data;},error=>console.log(error));}

    onSubmit(travel:Travel){
      

      this.travelService.updateTravelById(this.id,travel).subscribe(data =>{
        console.log(data)});
    }
  

}
