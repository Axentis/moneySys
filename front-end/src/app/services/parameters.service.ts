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
import { Opposition } from '../model/opposition';
import { Rechargement } from '../model/Rechargement';
import { Renouvelement } from '../model/RenouvelementCarte';
import { TarifCarte } from '../model/tarif-carte';
import { PlafondCarte } from '../model/plafondCarte';

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
  rechargementt:Rechargement;
  renouvelementt:Renouvelement
  cartee:Carte;
  type_cartee:TypeCarte;
  //Tarif de commerçant
  tariff:Tarif;
  //Tarif de carte
  tarif_cartee:TarifCarte;
  plafond_cartee:PlafondCarte
  opposition_cartee:Opposition;
  operationn:Operation;
  //canal:CanalAcceptaion;
  etatt:boolean=true
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
    return new TypeCarte(0,"",0,0);
  }
  get tarif(){
    return new Tarif(0,"",0,0,0,0,0,0,0,0,0,0);
  }
  get tarif_carte(){
    return new TarifCarte(0,"",0,0)
  }
  get plafond_carte(){
    return new PlafondCarte(0,0,0);
  }
  get rechargement(){
    return new Rechargement(new Date(),0,0)
  }
  get renouvelement(){
    return new Renouvelement(0,new Date(),new Date())
  }
  get opposition_carte(){
    return new Opposition(0,"",0)
  }
  get carte(){
    return new Carte(0,this.info_carte,"",false,false,false,[this.rechargement],this.compte,this.porteur,[this.renouvelement],this.opposition_carte);
  }
  
  get etat(){
    return this.etatt
  }
  // getters
  tarifCom(){
    return this.tarif
  }
  tarifCart(){
    return this.tarif_cartee
  }
  type(){
    return this.type_cartee
  }
  plafond(){
    return this.plafond_cartee
  }
  opposition(){
    return this.opposition_cartee
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
   set_tarif_carte(tarif_carte:TarifCarte){
    this.tarif_cartee=tarif_carte
  }
  set_type_carte(type:TypeCarte){
    this.type_cartee=type
  }
  set_plafond_carte(plafond:PlafondCarte){
    this.plafond_cartee=plafond
  }
  set_opposition_carte(opposition:Opposition){
    this.opposition_cartee=opposition
  }
  set_carte(carte:Carte){
    this.cartee=carte
  }
  set_rechargement(rechargement:Rechargement)
  {
    this.rechargementt=rechargement
  }
  set_Renouvelement(renouvelement:Renouvelement){
    this.renouvelementt=renouvelement
  }
  etattt(etat:boolean){
    this.etatt=etat
  }
}
