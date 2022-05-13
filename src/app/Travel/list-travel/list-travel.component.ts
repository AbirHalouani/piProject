import { Component, OnInit,Pipe, PipeTransform} from '@angular/core';
import { Travel } from '../../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';
//import { Chart} from 'chart.js';
import { Router } from '@angular/router';
//import { ChartOptions,ChartType,ChartDataSets } from 'chart.js';

import * as chartJs from 'chart.js';
//import Chart from 'chart.js';
//import 'chart.js/auto';

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css'],
  
})
export class ListTravelComponent implements OnInit,PipeTransform
 {
  p: number = 1;
  Travels: Travel[] = [];


  saleData= [];

  ctx: any;
  canvas: any;
  labels: string[] = [];
  numbers: number[] = [];

  searchTerm!:string;
  items!: string;
  itemsCopy!:any; 
  tag!:any; 

query!:string;


  transform(value: any, input: string) { if (input) { input = input.toLowerCase(); return value.filter(function (el: any) { return el.toLowerCase().indexOf(input) > -1; }) } return value; }





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
this.transform(null, this.query);
      this.travelService.statistique().subscribe(data =>{
        console.log(data);
        this.saleData =data ;}
        );
/*var ctx=document.getElementById("myChart");
var  myChart=new Chart(ctx,this.chartData);*/

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
