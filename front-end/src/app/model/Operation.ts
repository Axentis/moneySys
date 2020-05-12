import { Compte } from './compte';

export class Operation{
    constructor(
        private codeOpp?:number,
        private montantt?:number,
        private dateOpp?:Date,
        private comptee?: Compte
    ){}
    //Getters
    get codeOp(){
        return this.codeOpp
    }
    get montant(){
        return this.montantt
    }
    get dateOp(){
        return this.dateOpp
    }
    get compte(){
        return this.comptee
    }
}