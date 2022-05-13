import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTravelComponent } from './Travel/list-travel/list-travel.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { AddTravelComponent } from './Travel/add-travel/add-travel.component'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UpdateTravelComponent } from './Travel/update-travel/update-travel.component';
import { CreateTravelAgencyComponent } from './TravelAgency/create-travel-agency/create-travel-agency.component';
import { ListTravelAgencyComponent } from './TravelAgency/list-travel-agency/list-travel-agency.component';
import { UpdateTravelAgencyComponent } from './TravelAgency/update-travel-agency/update-travel-agency.component';
import { TravelsByUserComponent } from './Travel/travels-by-user/travels-by-user.component';
import { TravelPartnerComponent } from './Travel/travel-partner/travel-partner.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
//import { ChartsModule } from 'ng2-charts';
import { MbscModule } from '@mobiscroll/angular-lite';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { StatistiqueAComponent } from './statistique-a/statistique-a.component';



//const   appRoutes: Routes = [  {path: '',component:BackEndComponent}] //,children:[]
const routes : Routes = [
  
    {path: '', component : AppComponent}, 
    {path: 'back-end', component: BackEndComponent} ,
    {path: 'home', component: HomeComponent},
    {path: 'list-travel', component: ListTravelComponent},
    {path: 'add-travel/:id', component: AddTravelComponent},
    {path: 'update-travel/:id', component: UpdateTravelComponent},
    {path: 'add-travelAgency', component: CreateTravelAgencyComponent},
    {path: 'list-travelAgency', component:   ListTravelAgencyComponent},
    {path: 'update-travelAgency/:id', component: UpdateTravelAgencyComponent},
    {path: 'list-travelByUser/:id', component:   TravelsByUserComponent },
    {path: 'list-travelPartner/:id/:id1', component:   TravelPartnerComponent },
    {path: 'statA', component:   StatistiqueAComponent },
    
    
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    BackEndComponent,
    HomeComponent,
    ListTravelComponent,
    AddTravelComponent,
    UpdateTravelComponent,
    CreateTravelAgencyComponent,
    ListTravelAgencyComponent,
    UpdateTravelAgencyComponent,
    TravelsByUserComponent,
    TravelPartnerComponent,
    StatistiqueAComponent,
    
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatSelectCountryModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MbscModule,
    
    BrowserModule,FormsModule, ReactiveFormsModule, DropDownListModule, ButtonModule,
   
    
    //ChartsModule,
    
    
   
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
