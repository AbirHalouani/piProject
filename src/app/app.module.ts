import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTravelComponent } from './Travel/list-travel/list-travel.component';
import {HttpClientModule} from '@angular/common/http';
import { AddTravelComponent } from './Travel/add-travel/add-travel.component'
import { FormsModule } from '@angular/forms';
import { UpdateTravelComponent } from './Travel/update-travel/update-travel.component';
import { CreateTravelAgencyComponent } from './TravelAgency/create-travel-agency/create-travel-agency.component';
import { ListTravelAgencyComponent } from './TravelAgency/list-travel-agency/list-travel-agency.component';
import { UpdateTravelAgencyComponent } from './TravelAgency/update-travel-agency/update-travel-agency.component';
import { TravelsByUserComponent } from './Travel/travels-by-user/travels-by-user.component';
import { TravelPartnerComponent } from './Travel/travel-partner/travel-partner.component';
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
    TravelPartnerComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
