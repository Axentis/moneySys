import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorteurComponent } from './porteur/porteur.component';
import { FormulaireComponent } from './carte/gestion-des-cartes/formulaire/formulaire.component';
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';
import { CompteComponent } from './porteur/compte/compte.component';
import { InfoPorteurComponent } from './carte/gestion-des-cartes/info-porteur/info-porteur.component';
import { InfoCarteComponent } from './carte/gestion-des-cartes/info-carte/info-carte.component';
import { GestionDesCartesComponent } from './carte/gestion-des-cartes/gestion-des-cartes.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TypeCarteComponent } from './parametrage/carte/type-carte/type-carte.component';
import { TarifFormComponent } from './parametrage/carte/tarif/tarif-form/tarif-form.component';
import { TarifComponent } from './parametrage/carte/tarif/tarif.component';
import { TypeFormComponent } from './parametrage/carte/type-carte/type-form/type-form.component';
import { RenouvelementComponent } from './carte/renouvelement/renouvelement.component';
import { OppositionComponent } from './carte/opposition/opposition.component';
import { RechargementComponent } from './carte/rechargement/rechargement.component';
import { AnnulationComponent } from './carte/annulation/annulation.component';
import { EtatCarteComponent } from './carte/etat-carte/etat-carte.component';
import { PlafondComponent } from './parametrage/carte/plafond/plafond.component';

const routes: Routes = [
  //Accueil
  {path:'acceuil', component:AcceuilComponent},
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  //Porteur OppositionComponent
  {path:'porteur', component:PorteurComponent},
  //Carte component  
  {path:'gestionCarte', component:GestionDesCartesComponent} ,
  {path:'formCarte', component:FormulaireComponent} ,
  {path:'formCartePorteur', component:InfoPorteurComponent} ,
  {path:'formCarteBIN', component:InfoCarteComponent} ,
  {path:'renouvelementCarte', component:RenouvelementComponent} ,
  {path:'oppositionCarte', component:OppositionComponent} ,
  {path:'rechargementCarte', component:RechargementComponent} ,
  {path:'annulationCarte', component:AnnulationComponent} ,
  {path:'etatCarte', component:EtatCarteComponent} ,
  
  // Parametrage 
  {path:'typeCarte', component:TypeCarteComponent} ,
  {path:'typeFormCarte', component:TypeFormComponent} ,
    //Tarif carte TarifComponent
  {path:'tarifFormCarte', component:TarifFormComponent} ,
  {path:'tarifCarte', component:TarifComponent} ,
    //Plafond de carte
  {path:'plafondCarte', component:PlafondComponent} ,
  //  {path:'typeFormCarte', component:TypeFormComponent} ,

  {path:'gestion', component:CompteComponent} ,

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
