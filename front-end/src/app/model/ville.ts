export class Ville {
    code_ville:string;
    label:string;

    constructor( code_ville = "", label = ""){
        this.code_ville = code_ville;
        this.label = label;
    }
}