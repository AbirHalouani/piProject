import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
//const   appRoutes: Routes = [  {path: '',component:BackEndComponent}] //,children:[]
const routes : Routes = [
  {path: 'back', component: BackEndComponent},
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    BackEndComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
