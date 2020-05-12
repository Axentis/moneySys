import {Compte} from './compte';
import { Agence } from './Agence';
import { Banque } from './Banque';
/**
 * 
 */
export class Porteur{
    nom: string;
    prenom:string;
    cin:string;
    compte:Compte[];
    sex:string;
    situationFamiliale:string;
    banque:Banque;
    agence:Agence;

    constructor(nom?: string,
        prenom?:string,
        cin?:string,
        compte?:Compte[],
        sex?:string,
        situationFamiliale?:string,
        banque?:Banque,
        agence?:Agence)
        {    
            this.nom=nom
            this.prenom=prenom
            this.cin=cin
            this.compte = compte
            this.sex=sex
            this.situationFamiliale=situationFamiliale
            this.banque= banque
            this.agence=agence
    }
}