import { Component, OnInit } from '@angular/core';
import { Travel } from '../../modules/travel';
import{TravelService} from 'src/app/service/travelService/travel.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import axios from "axios";
//import { setOptions, getJson , localeAr } from '@mobiscroll/angular-lite';
import { HttpClient } from '@angular/common/http';
//import { WorldCountries, WORLD_COUNTRIES } from '@ztopia/world-countries';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';



/*setOptions({
  locale: localeAr,
  theme: 'ios',
  themeVariant: 'light'
});*/

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css'],
 
})
export class AddTravelComponent implements OnInit {
travel:Travel=new Travel();
myData: any;
myData2: any;
requestOptions:any;

    // set the height of the popup
    public height: string = '200px';
    //sort the result items
    public sorting: string = 'Ascending';
  constructor(private travelService:TravelService,private route : ActivatedRoute,private router:Router,private http: HttpClient) { 
  // angulartics2GoogleAnalytics.startTracking();
  }
  id!:number;
  public text!: string ;
  public text2!: string ;
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
this.text== "Select a country";
this.text2== "Select a country";
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
            const countries = [];
            
        
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
                countries.push({ text2: country.text, value2: country.value });
            }
            this.myData = countries;
            this.myData2 = countries;
        });



        
    
  }


  
  public fields: Object = {text:"text", value: "value"  };

  public fields2: Object = {text2:"text2", value2: "value2"  };
  // set the placeholder to the DropDownList input
 
  //Bind the filter event
  public onFiltering:EmitType<Text> =  (e: FilteringEventArgs ) => {

    if (e.text == '') {
      e.updateData(this.myData);
  } else {
      let query = new Query();
      //frame the query based on search string with filter type.
      query = (e.text != "") ? query.where("Country", "contains", e.text, true): query;
      //pass the filter data source, filter query to updateData method.
      e.updateData(this.myData, query);}
  };
    

  public onFiltering2:EmitType<Text> =  (e2: FilteringEventArgs ) => {

    if (e2.text == '') {
      e2.updateData(this.myData);
  } else {
      let query = new Query();
      //frame the query based on search string with filter type.
      query = (e2.text != "") ? query.where("Country", "contains", e2.text, true): query;
      //pass the filter data source, filter query to updateData method.
      e2.updateData(this.myData, query);}
  };
    
    
  
  

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
    this.goToTravelList();
   
  }
goToTravelList()
{this.router.navigate(['list-travelByUser',this.id]);}







    
}
