import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../modules/user';
import{TravelService} from 'src/app/service/travelService/travel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-travel-partner',
  templateUrl: './travel-partner.component.html',
  styleUrls: ['./travel-partner.component.css']
})
export class TravelPartnerComponent implements OnInit {
  Users!:User[];
  idUser!:number;
  idTravel!:number;
  constructor(private travelService: TravelService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.idUser = this.route.snapshot.params['id'];
    this.idTravel= this.route.snapshot.params['id1'];
    this.travelService.getTravelPartnerList(this.idUser,this.idTravel).subscribe(data=>{this.Users=data;},error=>console.log(error));}
  }


