
export class Banque{
    code:string;
    nom:string;
    address:string;

    constructor(
        code = "" , nom = "", address = ""
    ){
        this.code = code;
        this.nom = nom;
        this.address = address;
    }
}