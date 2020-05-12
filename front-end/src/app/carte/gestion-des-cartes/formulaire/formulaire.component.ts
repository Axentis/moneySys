import { Component, OnInit } from '@angular/core';
import { Porteur } from 'src/app/model/porteur';
import { GlobalService } from 'src/app/services/global.service';
import {ParametersService } from 'src/app/services/parameters.service';

import { Router } from '@angular/router';
import { Carte } from 'src/app/model/Carte';
import { DataService } from 'src/app/services/data.service';
import { InfoCarte } from 'src/app/model/Info_carte';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  //etat:boolean=this.Parameter.etat
  carte= this.Parameter.carte
  a=this.Parameter.cart()
  etat:boolean= this.Parameter.etat;
  constructor(
    private globalService:GlobalService,
    private Parameter: ParametersService,
    private data:DataService,
    private router:Router
  ) { 

  }
  global(){
    this.globalService.porteur=this.Parameter.porteur;
    this.globalService.info_carte=this.Parameter.info_carte
  }
  ngOnInit() {
    if(this.etat==true){
        if (this.globalService.porteur!=undefined) {
          this.carte.porteur = this.globalService.porteur;
          this.carte.comptes=this.carte.porteur.compte
        }
        if (this.globalService.info_carte!=undefined) {
          this.carte.info = this.globalService.info_carte;
        }
        this.carte.renouvelement="renouvelable"
      }
    if(this.etat==false){
      this.carte=this.a
    }    
    

  }
 
  
  submit(form){
    console.log(form.value.num)
  }
  
  add(){
   
   // this.data.cartee[0].porteur=this.porteur
    this.data.pushCarte(this.carte)
  }
  //Renouvelement
  definir() {
    this.carte.renouvelement="à définir"
  } 
  renouvlable(){
    this.carte.renouvelement="renouvelable"
    this.carte.dateDeb=new Date()
  }
  nonRenouvelable(){
    this.carte.renouvelement="non renouvelable"
  }
  addCarte(){
    this.router.navigateByUrl("/formCarteBIN")
  }
  annuler(){
    if(this.etat==false){
      this.carte=this.a
    }    
  }  
}

