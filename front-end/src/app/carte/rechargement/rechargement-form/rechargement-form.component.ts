import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Rechargement } from 'src/app/model/Rechargement';

@Component({
  selector: 'app-rechargement-form',
  templateUrl: './rechargement-form.component.html',
  styleUrls: ['./rechargement-form.component.css']
})
export class RechargementFormComponent implements OnInit {
  carte:Carte = this.Parameters.carte;
  montant:number=0;
  frais:number=this.data.rechargement[0].fraisRechargement;
  etat:boolean
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }
  ngOnInit() {
    /* this.carte = this.Parameters.cart()
    this.Parameters.cartee=this.Parameters.carte
    console.log(this.Parameters.etat) */
  }
  
  recharger()
  {
   this.data.carte.forEach(element=>{
     if(element.Num==this.carte.Num){
      let montant=(this.montant - this.frais)
      element.comptes.solde+=montant
      this.data.pushRechargement(new Rechargement(new Date,montant,this.frais))
      element.rechargement.unshift(new Rechargement(new Date,montant,this.frais))
  
     }
     
   })  
   this.router.navigateByUrl("/rechargementCarte")
  }
  validation(){
    let i=0
    this.data.carte.forEach(element=>{
      if(element.Num==this.carte.Num
        &&element.renouvelement!="non renouvelable" 
        && element.IsAnnule==false 
        && element.info.etat !="o"){
        i=1;
        
      }
    });
    if(i==1)
    {
      this.etat=true;
      i=0
    }
    else{
      this.etat=false
    }

  } 
}
