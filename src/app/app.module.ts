import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//const   appRoutes: Routes = [  {path: '',component:BackEndComponent}] //,children:[]
const routes : Routes = [
  
    {path: '', component : AppComponent}, 
    {path: 'back-end', component: BackEndComponent} ,
    {path: 'home', component: HomeComponent},
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    BackEndComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
