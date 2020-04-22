import { Compte } from './compte';
import { Ville } from './ville';
import { Banque } from './banque';
import { Agence } from './agence';
import { ThrowStmt } from '@angular/compiler';

/**
 * 
 */
export class Porteur{

    nom: string ;
    prenom:string ;
    cin:string ;
    compte:Compte;
    sexe:string ;
    situationFamiliale:string;
    dateNaissance: Date;
    address:string;
    codePostale:string;
    ville:Ville;
    telephone:string ;
    email:string ;
    banque:Banque;
    agence:Agence;
    categorie:string;

    //constructor();
    constructor(
        nom  = "", prenom = "", cin = "", 
        compte = new Compte() ,  sexe = "", situationFamiliale = "",  dateNaissance = new Date(), address = "", 
        codePostale = "", ville = new Ville(), telephone = "",  email = "", banque = new Banque(),
        agence = new Agence(), categorie = "",
    ){
        this.nom = nom ;
        this.prenom = prenom ;
        this.cin = cin ;
        // compte 
        this.compte = compte;
        this.sexe = sexe ;
        this.situationFamiliale = situationFamiliale ;
        this.dateNaissance = new Date();
        this.address = address ;
        this.codePostale = codePostale ;
        // ville 
        this.ville = ville;
        this.telephone = telephone ;
        this.email = email ;
        // banque 
        this.banque = banque;
        // agence 
        this.agence = agence;
        this.categorie = categorie ;
    }

    

}