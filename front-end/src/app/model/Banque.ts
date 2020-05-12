import { Agence } from './Agence';

export class Banque{
    id:number;
    nom:string;
    adresse:string;
    agence:Agence[];
    constructor(
        id?:number,
        nom?:string,
        adresse?:string,
        agence?:Agence[]
    )
    {
        this.id=id;
        this.nom=nom;
        this.adresse=adresse;
        this.agence=agence;
    }
}