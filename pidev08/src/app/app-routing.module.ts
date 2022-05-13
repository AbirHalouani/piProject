import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDomaineComponent } from './add-domaine/add-domaine.component';
import { DomaineListComponent } from './domaine-list/domaine-list.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';

const routes: Routes = [
    {path: 'domaines', component: DomaineListComponent},
    {path: 'add-doamine', component: AddDomaineComponent},
    {path: '', redirectTo: 'domaines', pathMatch: 'full'},
    {path: 'update-domaine/:id_d', component: UpdateDomaineComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }