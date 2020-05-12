import { Injectable } from '@angular/core';
import { Compte } from '../model/compte';
import { Porteur } from '../model/porteur';
import { Banque } from '../model/Banque';
import { Agence } from '../model/Agence';
import { Carte } from '../model/Carte';
import { TypeCarte } from '../model/type_carte';
import { Tarif } from '../model/tarif';
import { ReseauAcceptaion } from '../model/Reseaux';
//import { CanalAcceptaion } from '../model/canal_d_acceptation';
import { InfoCarte } from '../model/Info_carte';
import { Operation } from '../model/Operation';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  reseau:ReseauAcceptaion;
  agencee:Agence
  banquee:Banque;
  comptee:Compte;
  porteurr:Porteur;
  info_cartee:InfoCarte;
  cartee:Carte;
  type_cartee:TypeCarte;
  tarif_cartee:Tarif;
  operationn:Operation;
  //canal:CanalAcceptaion;
  etatt:boolean
  constructor() { }

  //Intanciations
  get agence(){
    return new Agence(0,"","");
  }
  get banque(){
    return new Banque(0,"","",[this.agence])
  }
  get opertion(){
    return new Operation(0,0,new Date)
  }
  get compte()
  {
    return new Compte(0,"","",0,[this.opertion]);
  }
  get porteur(){
    return  new Porteur("","","",[this.compte],"","",this.banque,this.agence)
  }
  get info_carte(){
    return new InfoCarte(0,this.type_carte,this.tarif_carte,"")
  }
  get type_carte(){
    return new TypeCarte(0,"");
  }
  get tarif_carte(){
    return new Tarif(0,"",0,0,0,0,0,0,0,0,0,0);
  }
  
  get carte(){
    return new Carte(0,this.info_carte,"",false,false,false,[this.compte],this.porteur,new Date(),new Date)
  }
  
  get etat(){
    return this.etatt
  }
  // getters
  tarif(){
    return this.tarif_cartee
  }
  type(){
    return this.type_cartee
  }
  cart(){
    return this.cartee
  }

  //Setters
  set agence(value)
  {
    this.agencee= value;
  }

  set banque(value)
  {
    this.banquee= value
  }

  set compte(value){
    this.comptee=value
  }
  set porteur(value)
  {
    this.porteurr=value
  }
  //Setters
   set_tarif_carte(tarif:Tarif){
    this.tarif_cartee=tarif
  }
  set_type_carte(type:TypeCarte){
    this.type_cartee=type
  }
  set_carte(carte:Carte){
    this.cartee=carte
  }
  etattt(etat:boolean){
    this.etatt=etat
  }
}
