import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorteurComponent } from './porteur/porteur.component';
import { CompteComponent } from './porteur/compte/compte.component'
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';
import { AgenceComponent } from './porteur/agence/agence.component';
import { VilleComponent } from './porteur/ville/ville.component';
import { BanqueComponent } from './porteur/banque/banque.component';
import { HomePorteurComponent } from './porteur/home-porteur/home-porteur.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { RegionComponent } from './parametrage/region/region.component';
import { BanqueTComponent } from './parametrage/banque-t/banque-t.component';

import { AddBanqueComponent } from './parametrage/banque-t/add-banque/add-banque.component';
import { ShowBanqueComponent } from './parametrage/banque-t/show-banque/show-banque.component';
import { ShowAgenceComponent } from './parametrage/agence-t/show-agence/show-agence.component';
import { AddAgenceComponent } from './parametrage/agence-t/add-agence/add-agence.component';
import { AgenceTComponent } from './parametrage/agence-t/agence-t.component';
import { VilleTComponent } from './parametrage/ville-t/ville-t.component';
import { ShowVilleComponent } from './parametrage/ville-t/show-ville/show-ville.component';
import { AddVilleComponent } from './parametrage/ville-t/add-ville/add-ville.component';



const routes: Routes = [
  {
    path: 'porteur',
    component: PorteurComponent,
    children: [
      { path: '', component: HomePorteurComponent },
      {
        path: 'ajouterPorteur',
        component: HandlingPorteurComponent
      },
      {
        path: 'compte',
        component: CompteComponent
      },
      {
        path: 'agence',
        component: AgenceComponent
      },
      {
        path: 'ville',
        component: VilleComponent
      },
      {
        path: 'banque',
        component: BanqueComponent
      },
    ]
  },
  {
    path: 'parametrage',
    component: ParametrageComponent,
    children: [
      { path: 'region', component: RegionComponent },
      {
        path: 'banque', component: BanqueTComponent,
        children: [
          { path: '', component: ShowBanqueComponent },
          { path: 'ajouter', component: AddBanqueComponent }
        ]
      },
      {
        path: 'agence', component: AgenceTComponent,
        children: [
          { path: '', component: ShowAgenceComponent },
          { path: 'ajouter', component: AddAgenceComponent }
        ]
      },
      {
        path: 'ville', component: VilleTComponent,
        children: [
          { path: '', component: ShowVilleComponent },
          { path: 'ajouter', component: AddVilleComponent }
        ]
      },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true} 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
