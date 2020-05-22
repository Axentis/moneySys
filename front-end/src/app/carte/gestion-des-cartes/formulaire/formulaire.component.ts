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
  test:number
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
          this.carte.comptes=this.carte.porteur.compte[0]
        }
        if (this.globalService.info_carte!=undefined) {
          this.carte.info = this.globalService.info_carte;
        }
        this.carte.renouvelement="renouvelable"
        this.renouvlable()
        this.carte.Num=this.data.carte[this.data.carte.length-1].Num+1
      }
    if(this.etat==false){
      this.carte=this.a
      if (this.globalService.porteur!=undefined) {
        this.carte.porteur = this.globalService.porteur;
        this.carte.comptes=this.carte.porteur.compte[0]
      }
      if (this.globalService.info_carte!=undefined) {
        this.carte.info = this.globalService.info_carte;
      }
    }    
    
  }
 
  
  submit(form){
    console.log(form.value.num)
  }
  
  add(){
   
   // this.data.cartee[0].porteur=this.porteur
    //this.carte.info.etat='i'
    this.data.pushCarte(this.carte)


  }
  //Renouvelement
  definir() {
    this.carte.renouvelement="à définir"
    this.carte.date_renouvelement[0].dateDebut=new Date()
    this.carte.date_renouvelement[0].dateFin=new Date()
    this.carte.date_renouvelement[0].code_renouvellement=this.data.renouvelement.length+1
    
  } 
  renouvlable(){
    
    this.carte.renouvelement="renouvelable"
    let date :Date= new Date()
    let a = date.getFullYear()+5
    this.carte.date_renouvelement[0].dateDebut=new Date()    
    date.setFullYear(2024)
    this.carte.date_renouvelement[0].dateFin=date
    this.carte.date_renouvelement[0].dateFin.setFullYear(a)
    this.carte.date_renouvelement[0].code_renouvellement=this.data.renouvelement.length+1
  }

  nonRenouvelable(){
    this.carte.renouvelement="non renouvelable"
    if(this.carte.date_renouvelement[0].dateFin!= undefined){
      this.carte.date_renouvelement[0].dateFin=new Date()
    }
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

