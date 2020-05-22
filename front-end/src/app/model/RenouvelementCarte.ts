import { Carte } from './Carte'

export class Renouvelement{
    constructor(
        private code_renouvellementt?:number,
        private dateDebutt?:Date,
        private dateFinn?:Date,
        private cartee?: Carte
    ){}

    //Getters
    get code_renouvellement(){
        return this.code_renouvellementt
    }
    get dateDebut(){
        return this.dateDebutt
    }
    get dateFin(){
        return this.dateFinn
    }
    get carte(){
        return this.cartee
    }
    //Setters
    set code_renouvellement(code:number){
        this.code_renouvellementt=code
    }
    set dateDebut(dateDebut:Date){
        this.dateDebutt=dateDebut
    }
    set dateFin(datefin:Date){
        this.dateFinn=datefin
    }
    set carte(carte:Carte){
        this.cartee=carte
    }
}