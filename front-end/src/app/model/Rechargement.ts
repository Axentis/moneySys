import { Carte } from './Carte'

export class Rechargement{
    constructor(
        private dateRechargementt?: Date,
        private montantt?:number,
        private fraisRechargementt?:number,
        private cartee?:Carte
    ){}

    //Date de Rechargement
    get dateRechargement(){
        return this.dateRechargementt
    }
    set dateRechargement(dateRechargement:Date){
        this.dateRechargementt=dateRechargement
    }

    //Montant
    get montant(){
        return this.montantt
    }
    set montant(montant:number){
        this.montant=montant
    }

    //Frais de rechargement
    get fraisRechargement(){
        return this.fraisRechargementt
    }
    set fraisRechargement(frais:number){
        this.fraisRechargementt=frais
    }
    //Carte
    get carte(){
        return this.cartee
    }
    set carte(carte:Carte){
        this.cartee=carte
    }
}