import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { BackEndComponent } from './back-end/back-end.component';

import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { StatsComponent } from './stats/stats.component';
const routes: Routes = [
  {path: '', component : AppComponent}, 
  {path: 'back-end', component: BackEndComponent} ,
  {path: 'home', component: HomeComponent},
  { path: 'questions', component: QuestionComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'reponses', component: ReponsesComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'stats', component: StatsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule] 

})
export class AppRoutingModule { }
