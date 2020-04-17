import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteurComponent } from './porteur/porteur.component';
import { CarteComponent } from './carte/carte.component';
import { GestionDesCartesComponent } from './carte/gestion-des-cartes/gestion-des-cartes.component';
import { FormulaireComponent } from './carte/gestion-des-cartes/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    PorteurComponent,
    CarteComponent,
    GestionDesCartesComponent,
    FormulaireComponent
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
