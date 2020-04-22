
export class Agence{
    code_agence:string;
    nom:string;
    address:string;

    constructor( code_agence = "",nom = "", address = ""){
        this.code_agence = code_agence;
        this.nom = nom ;
        this.address = address;
    }
    
}