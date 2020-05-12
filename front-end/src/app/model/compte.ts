import { Porteur } from './porteur';
import { Operation } from './Operation';

export class Compte{
    bin:number;
    client:string;
    comptePrimare:string;
    solde:number;
    operation:Operation[];
    porteur: Porteur;
    
    constructor( 
        bin?:number,
        client?:string,
        comptePrimare?:string,
        solde?:number,
        operation?:Operation[],
        porteur?: Porteur,
        ){
            this.bin=bin;
            this.client=client;
            this.comptePrimare=comptePrimare;
            this.solde=solde;
            this.operation=operation;
            this.porteur=porteur;
    }
}