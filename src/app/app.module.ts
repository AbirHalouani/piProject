import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AvisComponent } from './avis/avis.component';
import { StatsComponent } from './stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//const   appRoutes: Routes = [  {path: '',component:BackEndComponent}] //,children:[]
const routes : Routes = [
  
    {path: '', component : AppComponent}, 
    {path: 'back-end', component: BackEndComponent} ,
    {path: 'home', component: HomeComponent},
  
  ];
  @NgModule({
    declarations: [
      AppComponent,
      QuestionComponent,
      ReponsesComponent,
      ReclamationComponent,
      AvisComponent,
      StatsComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
