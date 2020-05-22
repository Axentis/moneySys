import { Injectable } from '@angular/core';
import { Agence } from '../model/Agence';
import { Banque } from '../model/Banque';
import { Compte } from '../model/compte';
import { Porteur } from '../model/porteur';
import { Carte } from '../model/Carte';
import { ReseauAcceptaion } from '../model/Reseaux';
import { TypeCarte } from '../model/type_carte';
import { Tarif } from '../model/tarif';
//import { CanalAcceptaion } from '../model/canal_d_acceptation';
import { InfoCarte } from '../model/Info_carte';
import { Operation } from '../model/Operation';
import { Opposition } from '../model/opposition';
import { Rechargement } from '../model/Rechargement';
import { Renouvelement } from '../model/RenouvelementCarte';
import { TarifCarte } from '../model/tarif-carte';
import { PlafondCarte } from '../model/plafondCarte';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  reseau:ReseauAcceptaion[];
  agencee:Agence[]=[new Agence(4,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund"),
                    new Agence(6,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund"),
                    new Agence(9,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund") ]
  
  banquee:Banque[] =[new Banque(13,"BANCOBU","'84 Chaussee Prince Louis Rwagasore, Bujumbura, Burundi",this.agencee)];
  type_cartee:TypeCarte[]=[new TypeCarte(1,"Bancobu Visa",25000,40000),
                           new TypeCarte(2,"Bancobu",20000,35000),
                          new TypeCarte(3,"Jeune",15000,30000)];
  tarif_cartee:TarifCarte[]=[new TarifCarte(1,"Création de carte",0,0),
                        new TarifCarte(2,"Commission de notification",10000,0),
                        new TarifCarte(3,"Renouvelement de carte",0,0),
                        new TarifCarte(4,"Rechargement de carte",10,0),
                        new TarifCarte(5,"Frais de dossier",10000,0.015)];
  
  plafond_cartee:PlafondCarte[]=[new PlafondCarte(1,25000,40000),
                                new PlafondCarte(2,20000,35000),
                                new PlafondCarte(3,15000,30000)]
  tarif_Comm:Tarif[]=[new Tarif(1,"Mensuelle",4000,6000,150,50,350,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(2,"Annuelle",2000,4000,100,50,250,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(3,"Fin D'année",6000,10000,150,50,350,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(4,"Fêtes",5000,8000,200,100,250,0.2,0.1,0.3,0.0012,0.0013)];
  oppositionn:Opposition[]=[new Opposition(1,"Perte",150),
                            new Opposition(2,"Vol",150),
                            new Opposition(3,"Cassé",150),]
  operation:Operation[]=[]
  // Rechargement
  rechargementt:Rechargement[]=[new Rechargement(new Date(),3000,10),
    new Rechargement(new Date(),2000,10)]

  comptee:Compte[]=[new Compte(141213,"15","Epargne",(3000+this.rechargement[0].montant-this.rechargement[1].fraisRechargement)),
                    new Compte(141213,"16","Courant",5),
                    new Compte(141213,"19","Courant",(2500+this.rechargement[1].montant-this.rechargement[1].fraisRechargement)),
                    new Compte(141213,"23","Epargne",(80+this.rechargement[1].montant-this.rechargement[1].fraisRechargement))];
  porteurr:Porteur[]=[new Porteur("Chouhab","Amine","BJ438108",[this.compte[0],this.compte[1]],"M","Célébataire",this.banque[0],this.agence[1]),
                      new Porteur("Akkar","Badr","BJ468799",[this.compte[1]],"Mme","Célébataire",this.banque[0],this.agence[0]),
                      new Porteur("El Atifi","Charif","BJ546683",[this.compte[0],this.compte[1]],"Mlle","Mariée",this.banque[0],this.agence[1]),
                      new Porteur("Simou","Yassine","BJ43900",[this.compte[0]],"M","Célébataire",this.banque[0],this.agence[1]),];
  info_cartee:InfoCarte[]=[new InfoCarte(141213,this.type_carte[0],this.tarif_carte[1],"i"),
                          new InfoCarte(141213,this.type_carte[1],this.tarif_carte[0],"o"),
                          new InfoCarte(141213,this.type_carte[1],this.tarif_carte[3],"f"),
                          new InfoCarte(141213,this.type_carte[2],this.tarif_carte[2],"o"),]
  renouvelementt:Renouvelement[]=[new Renouvelement(1,new Date("2019-01-16"),new Date("2024-01-16")),
                                  new Renouvelement(2,new Date("2019-05-26"),new Date("2024-05-26")),
                                  new Renouvelement(3,new Date("2020-07-12"),new Date("2022-04-08"))]
  cartee:Carte[]=[ new Carte(1,this.info_carte[0],"renouvelable",true,false,false,[this.rechargement[0]],this.compte[0],this.porteur[0],[this.renouvelement[0]]),
                   new Carte(2,this.info_carte[1],"non renouvelable",false,true,false,null,this.compte[1],this.porteur[1],[new Renouvelement(0,new Date(),new Date())],this.opposition[0]),
                   new Carte(3,this.info_carte[2],"renouvelable",false,false,true,[this.rechargement[1]],this.compte[2],this.porteur[2],[this.renouvelement[1]]),
                   new Carte(4,this.info_carte[3],"à définir",true,false,true,[this.rechargement[1]],this.compte[3],this.porteur[3],[this.renouvelement[2]],this.opposition[1])];
  
  /* canal:CanalAcceptaion[]=[new CanalAcceptaion(1,"GAB"),
                           new CanalAcceptaion(2,"TPE"),
                           new CanalAcceptaion(3,"E-commerce")]; */
  constructor() {}

  // get 
  get type_carte(){
    return this.type_cartee;
  }
  get tarif_carte(){
    return this.tarif_cartee;
  }
  get plafond_carte(){
    return this.plafond_cartee
  }
  get agence(){
    return this.agencee
  }
  get banque(){
    return this.banquee
  }
  get porteur(){
    return this.porteurr
  }
  get info_carte(){
    return this.info_cartee
  }
  get opposition(){
    return this.oppositionn
  }
  get rechargement(){
    return this.rechargementt
  } 
  get renouvelement(){
    return this.renouvelementt
  }
  get carte(){
    return this.cartee
  }
  get compte(){
    return this.comptee
  }
  
  
  
  // Ajout
  pushType(type:TypeCarte)
  {
    this.type_cartee.push(type);
  }
  
  //Tarif de carte
  pushTarifCarte(tarifCarte:TarifCarte){
      this.tarif_cartee.push(tarifCarte)
    }
  pushTarif(tarif:TarifCarte){
    this.tarif_cartee.push(tarif)
  }
  pushPlafond(plafond:PlafondCarte){
    this.plafond_cartee.push(plafond)
  }
  pushOpposition(opposition:Opposition){
    this.oppositionn.push(opposition)
  }

  pushRechargement(rechargement:Rechargement){
    this.rechargementt.unshift(rechargement)
  }
  pushRenouvellement(renouvelement:Renouvelement){
    this.renouvelementt.unshift(renouvelement)
  }
  pushCarte(carte:Carte){
    this.cartee.push(carte)
  }

  //Suppression 
    //Suppressions des cartes
  supprimerCarte(index:number){
    this.cartee.splice(index,1)
  }
  //Suppressions des types de cartes
  supprimerTypeCarte(index:number){
    this.type_cartee.splice(index,1)
  }
  //Suppressions des tarifs des cartes
  supprimerTarifCarte(index:number){
    this.tarif_cartee.splice(index,1)
  }
  //Suppressions des plafonds des cartes
  supprimerPlafondCarte(index:number){
    this.plafond_cartee.splice(index,1)
  }
  //Suppressions des oppositions des cartes
  supprimerOppositionCarte(index:number){
    this.oppositionn.splice(index,1)
  }

  
}
