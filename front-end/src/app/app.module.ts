import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteurComponent } from './porteur/porteur.component';
import { CarteComponent } from './carte/carte.component';
import { GestionDesCartesComponent } from './carte/gestion-des-cartes/gestion-des-cartes.component';
import { FormulaireComponent } from './carte/gestion-des-cartes/formulaire/formulaire.component';
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';
import { CompteComponent } from './porteur/compte/compte.component';
import { AccueilCarteComponent } from './carte/gestion-des-cartes/accueil-carte/accueil-carte.component';
import { InfoPorteurComponent } from './carte/gestion-des-cartes/info-porteur/info-porteur.component';
import { InfoCarteComponent } from './carte/gestion-des-cartes/info-carte/info-carte.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ValuePipe } from './pipes/value.pipe';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { TypeCarteComponent } from './parametrage/carte/type-carte/type-carte.component';
import { OperationComponent } from './operation/operation.component';
import { TarifFormComponent } from './parametrage/carte/tarif/tarif-form/tarif-form.component';
import { TarifComponent } from './parametrage/carte/tarif/tarif.component';
import { TypeFormComponent } from './parametrage/carte/type-carte/type-form/type-form.component';
import { PlafondComponent } from './parametrage/carte/plafond/plafond.component';
import { RenouvelementComponent } from './carte/renouvelement/renouvelement.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { MenuuComponent } from './menuu/menuu.component';
import { OppositionComponent } from './carte/opposition/opposition.component';
import { RechargementComponent } from './carte/rechargement/rechargement.component';
import { AnnulationComponent } from './carte/annulation/annulation.component';
import { AnnulerCarteComponent } from './carte/annulation/annuler-carte/annuler-carte.component';
import { OppositionCarteComponent } from './carte/opposition/opposition-carte/opposition-carte.component';
import { EtatCarteComponent } from './carte/etat-carte/etat-carte.component';
import { PlafondFormComponent } from './parametrage/carte/plafond/plafond-form/plafond-form.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PorteurComponent,
    CarteComponent,
    GestionDesCartesComponent,
    FormulaireComponent,
    HandlingPorteurComponent,
    CompteComponent,
    AccueilCarteComponent,
    InfoPorteurComponent,
    InfoCarteComponent,
    ValuePipe,
    AcceuilComponent,
    ParametrageComponent,
    TypeCarteComponent,
    OperationComponent,
    TarifFormComponent,
    TarifComponent,
    TypeFormComponent,
    PlafondComponent,
    RenouvelementComponent,
    Menu1Component,
    Menu2Component,
    MenuuComponent,
    OppositionComponent,
    RechargementComponent,
    AnnulationComponent,
    AnnulerCarteComponent,
    OppositionCarteComponent,
    EtatCarteComponent,
    PlafondFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
