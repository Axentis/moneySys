import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteurComponent } from './porteur/porteur.component';
import { CompteComponent } from './porteur/compte/compte.component';
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';
import { BanqueComponent } from './porteur/banque/banque.component';

import { AgenceComponent } from './porteur/agence/agence.component';
import { VilleComponent } from './porteur/ville/ville.component';
import { HomePorteurComponent } from './porteur/home-porteur/home-porteur.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { RegionComponent } from './parametrage/region/region.component';
import { BanqueTComponent } from './parametrage/banque-t/banque-t.component';
import { AddBanqueComponent } from './parametrage/banque-t/add-banque/add-banque.component';
import { ShowBanqueComponent } from './parametrage/banque-t/show-banque/show-banque.component';
import { AddAgenceComponent } from './parametrage/agence-t/add-agence/add-agence.component';
import { ShowAgenceComponent } from './parametrage/agence-t/show-agence/show-agence.component';
import { AgenceTComponent } from './parametrage/agence-t/agence-t.component';
import { VilleTComponent } from './parametrage/ville-t/ville-t.component';
import { AddVilleComponent } from './parametrage/ville-t/add-ville/add-ville.component';
import { ShowVilleComponent } from './parametrage/ville-t/show-ville/show-ville.component';
import { CompteTComponent } from './parametrage/compte-t/compte-t.component';


// import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PorteurComponent,
    CompteComponent,
    HandlingPorteurComponent,
    BanqueComponent,
    AgenceComponent,
    VilleComponent,
    HomePorteurComponent,
    ParametrageComponent,
    RegionComponent,
    BanqueTComponent,
    AddBanqueComponent,
    ShowBanqueComponent,
    AddAgenceComponent,
    ShowAgenceComponent,
    AgenceTComponent,
    VilleTComponent,
    AddVilleComponent,
    ShowVilleComponent,
    CompteTComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
