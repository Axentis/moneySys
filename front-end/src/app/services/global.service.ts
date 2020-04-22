import { Injectable } from '@angular/core';
import { Porteur } from '../model/porteur'
import { Compte } from '../model/compte';
import { Ville } from '../model/ville';
import { Agence } from '../model/agence';
import { Banque } from '../model/banque';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  
  public porteur: Porteur;

  // fake data for test 
  public porteursData: Porteur[]= [
    new Porteur(
      "Lorem", "dolor","sit", new Compte("40014","nisi") , "consectetur", "adipisicing", 
      new Date(), "iure", "reiciendis nisi", 
      new Ville("minus", "nam"), "obcaecati",      
      "veniam obcaecati",new Banque( "nam" , "Suscipit", "elit"),
      new Agence("quibusdam","quidem", "veniam"),
      "labore"
    ),
    new Porteur(
      "Lorem", "dolor","sit", new Compte("40015","nisi") , 
      "consectetur", "adipisicing",  new Date(), "iure", "reiciendis nisi",  new Ville("minus", "nam"), "obcaecati",      
      "veniam obcaecati",new Banque( "nam" , "Suscipit", "elit"),
      new Agence("quibusdam","quidem", "veniam"), "labore"
    ),
    new Porteur(
      "Lorem", "dolor","sit", new Compte("40017","nisi") , 
      "consectetur", "adipisicing",  new Date(), "iure", "reiciendis nisi",  new Ville("minus", "nam"), "obcaecati",      
      "veniam obcaecati",new Banque( "nam" , "Suscipit", "elit"),
      new Agence("quibusdam","quidem", "veniam"), "labore"
    ),
    
  ];
  // fake data for test 
  public banques:Banque[] = [
    new Banque("BQ1123","Lorem ipsum dolor","Lorem ipsum dolor sit amet consectetur"),
    new Banque("BQ1124","Lorem ipsum dolor","Lorem ipsum dolor sit amet consectetur"),
    new Banque("BQ1125","Lorem ipsum dolor","Lorem ipsum dolor sit amet consectetur"),
    new Banque("BQ1126","Lorem ipsum dolor","Lorem ipsum dolor sit amet consectetur")
  ]

  // fake data for test 
  agences:Agence[] = [
    new Agence("ABC123", "sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipisicing elit"),
    new Agence("ABC124", "sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipisicing elit"),
    new Agence("ABC125", "sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipisicing elit"),
    new Agence("ABC126", "sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipisicing elit")
   
  ];

  // fake data for test 
  villes:Ville[] = [
    new Ville("49990", "LL"),
    new Ville("49991", "RR"),
    new Ville("49992", "PP"),
    new Ville("49993", "MN"),
    new Ville("49994", "LL"),
  ]

  constructor() { }

  // get data of porteurs from server side
  getPorteurs(){
    return this.porteursData ; 
  }

  // get data of banque from server side
  getBanques(){
    return this.banques
  }

  // add banque
  addBanque(banque:Banque){
    this.banques.push(banque);
  }

  // get data of Agence from server side
  getAgences(){
    return this.agences;
  }

  // add agence 
  addAgence(agence:Agence){
    this.agences.push(agence);
  }

  // get data of Ville from server side
  getVilles(){
    return this.villes;
  }

  // add ville 
  addVille(ville:Ville){
    this.villes.push(ville);
  }


}
