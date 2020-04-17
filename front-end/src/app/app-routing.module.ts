import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorteurComponent } from './porteur/porteur.component';
import { FormulaireComponent } from './carte/gestion-des-cartes/formulaire/formulaire.component';


const routes: Routes = [
  {path:'porteur', component:PorteurComponent},
  {path:'gestionCarte', component:FormulaireComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes,
    {enableTracing: true} 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
