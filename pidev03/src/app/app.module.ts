import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DomaineListComponent } from './domaine-list/domaine-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddDomaineComponent } from './add-domaine/add-domaine.component';
import { FormsModule } from '@angular/forms';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { GridViewComponent } from './grid-view/grid-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DomaineListComponent,
    AddDomaineComponent,
    UpdateDomaineComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
