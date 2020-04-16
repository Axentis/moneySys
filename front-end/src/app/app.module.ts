import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteurComponent } from './porteur/porteur.component';
import { CarteComponent } from './carte/carte.component';
import { GestionDesCartesComponent } from './carte/gestion-des-cartes/gestion-des-cartes.component';
import { FormComponent } from './carte/gestion-des-cartes/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PorteurComponent,
    CarteComponent,
    GestionDesCartesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
