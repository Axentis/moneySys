export class Renouvelement{
    constructor(
        private libellee:string,
        private dateDebutt:Date,
        private dateFinn:Date
    ){}

    //Getters
    get libelle(){
        return this.libellee
    }
    get dateDébut(){
        return this.dateDebutt
    }
    get dateFin(){
        return this.dateFinn
    }

    //Setters
    set libelle(libelle:string){
        this.libellee=libelle
    }
    set dateDebut(dateDebut:Date){
        this.dateDebutt=dateDebut
    }
    set dateFin(datefin:Date){
        this.dateFinn=datefin
    }
}