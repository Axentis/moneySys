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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  reseau:ReseauAcceptaion[];
  agencee:Agence[]=[new Agence(4,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund"),
                    new Agence(6,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund"),
                    new Agence(9,"BANCOBU-GARD DU NORD","Boulevard Mwambutsa, Bujumbura, Burund") ]
  
  banquee:Banque[] =[new Banque(13,"BANCOBU","'84 Chaussee Prince Louis Rwagasore, Bujumbura, Burundi",this.agencee)];
  type_cartee:TypeCarte[]=[new TypeCarte(1,"Visa Classique"),
                           new TypeCarte(2," Crédit"),
                          new TypeCarte(3,"Jeune")];
  tarif_cartee:Tarif[]=[new Tarif(1,"Mensuelle",4000,6000,150,50,350,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(2,"Annuelle",2000,4000,100,50,250,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(3,"Fin D'année",6000,10000,150,50,350,0.2,0.1,0.3,0.0012,0.0013),
                        new Tarif(4,"Fêtes",5000,8000,200,100,250,0.2,0.1,0.3,0.0012,0.0013)];

  operation:Operation[]=[]

  comptee:Compte[]=[new Compte(141213,"15","Visa",3000),
                    new Compte(141213,"19","Master",5)];
  porteurr:Porteur[]=[new Porteur("Chouhab","Amine","BJ438108",[this.compte[0],this.compte[1]],"M","Célébataire",this.banque[0],this.agence[1]),
                      new Porteur("Akkar","Badr","BJ468799",[this.compte[1]],"Mme","Célébataire",this.banque[0],this.agence[0]),
                      new Porteur("El Atifi","Charif","BJ546683",[this.compte[0],this.compte[1]],"Mlle","Mariée",this.banque[0],this.agence[1]),
                      new Porteur("Simou","Yassine","BJ43900",[this.compte[0]],"M","Célébataire",this.banque[0],this.agence[1]),];
  info_cartee:InfoCarte[]=[new InfoCarte(141213,this.type_carte[0],this.tarif_carte[1],"i"),
                          new InfoCarte(141213,this.type_carte[1],this.tarif_carte[0],"o"),
                          new InfoCarte(141213,this.type_carte[1],this.tarif_carte[3],"f"),
                          new InfoCarte(141213,this.type_carte[2],this.tarif_carte[2],"o"),]
  cartee:Carte[]=[ new Carte(1,this.info_carte[0],"renouvelable",true,false,false,[this.compte[0]],this.porteur[0],new Date),
                   new Carte(2,this.info_carte[1],"non renouvelable",false,true,false,[this.compte[1]],this.porteur[1],),
                   new Carte(3,this.info_carte[2],"renouvelable",false,false,true,[this.compte[0]],this.porteur[2],new Date()),
                   new Carte(4,this.info_carte[3],"à définir",true,false,true,[this.compte[1]],this.porteur[3],new Date(),new Date())];
  
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
  pushTarif(tarif:Tarif){
    this.tarif_cartee.push(tarif)
  }
  pushCarte(carte:Carte){
    this.cartee.push(carte)
  }
}
