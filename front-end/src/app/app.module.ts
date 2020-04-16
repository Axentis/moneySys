import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteurComponent } from './porteur/porteur.component';
import { CompteComponent } from './porteur/compte/compte.component';
import { HandlingPorteurComponent } from './porteur/handling-porteur/handling-porteur.component';

// import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PorteurComponent,
    CompteComponent,
    HandlingPorteurComponent,
    
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
