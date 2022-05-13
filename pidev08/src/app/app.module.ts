import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DomaineListComponent } from './domaine-list/domaine-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddDomaineComponent } from './add-domaine/add-domaine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from './_modal';

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
    ModalModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
