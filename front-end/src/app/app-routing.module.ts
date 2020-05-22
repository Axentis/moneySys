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
import { TypeCarteComponent } from './parametrage/type-carte/type-carte.component';
import { TarifFormComponent } from './parametrage/tarif/tarif-form/tarif-form.component';
import { TarifComponent } from './parametrage/tarif/tarif.component';
import { TypeFormComponent } from './parametrage/type-carte/type-form/type-form.component';
import { RenouvelementComponent } from './carte/renouvelement/renouvelement.component';
import { OppositionComponent } from './carte/opposition/opposition.component';
import { RechargementComponent } from './carte/rechargement/rechargement.component';
import { AnnulationComponent } from './carte/annulation/annulation.component';
import { EtatCarteComponent } from './carte/etat-carte/etat-carte.component';
import { PlafondComponent } from './parametrage/plafond/plafond.component';
import { PlafondFormComponent } from './parametrage/plafond/plafond-form/plafond-form.component';
import { OppositionParamComponent } from './parametrage/opposition-param/opposition-param.component';
import { OppsitionParamFormComponent } from './parametrage/opposition-param/oppsition-param-form/oppsition-param-form.component';
import { RechargementFormComponent } from './carte/rechargement/rechargement-form/rechargement-form.component';
import { RechargementAfficheComponent } from './carte/rechargement/rechargement-affiche/rechargement-affiche.component';
import { RenouvelementFormComponent } from './carte/renouvelement/renouvelement-form/renouvelement-form.component';
import { RenouvelementAfficheComponent } from './carte/renouvelement/renouvelement-affiche/renouvelement-affiche.component';
import { TarifCarteFormComponent } from './parametrage/tarif-carte/tarif-carte-form/tarif-carte-form.component';
import { TarifCarteComponent } from './parametrage/tarif-carte/tarif-carte.component';

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
    //Renouvelemnt des cartes 
  {path:'renouvelementCarte', component:RenouvelementComponent} ,
  {path:'renouvelementFormCarte', component:RenouvelementFormComponent} ,
  {path:'renouvelementAfficheCarte', component:RenouvelementAfficheComponent} ,

  {path:'oppositionCarte', component:OppositionComponent} ,
    //Rechargement des cartes RechargementAfficheComponent
  {path:'rechargementCarte', component:RechargementComponent} ,
  {path:'rechargementFormCarte', component:RechargementFormComponent} ,
  {path:'rechargementAfficheCarte', component:RechargementAfficheComponent} ,

  {path:'annulationCarte', component:AnnulationComponent} ,
  {path:'etatCarte', component:EtatCarteComponent} ,
  
  // Parametrage 
  {path:'typeCarte', component:TypeCarteComponent} ,
  {path:'typeFormCarte', component:TypeFormComponent} ,
    //Tarif carte TarifComponent
  {path:'tarifFormCarte', component:TarifCarteFormComponent} ,
  {path:'tarifCarte', component:TarifCarteComponent} ,
    //Plafond de carte 
  {path:'plafondCarte', component:PlafondComponent} ,
  {path:'plafondFormCarte', component:PlafondFormComponent} ,
   //Opposition de carte oppositionParamCarte
  {path:'oppositionParamCarte', component:OppositionParamComponent} ,
  {path:'oppositionParamFormCarte', component:OppsitionParamFormComponent} ,

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
