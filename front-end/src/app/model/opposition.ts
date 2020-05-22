
export class Opposition{
    constructor(
        private code_oppositionn ?: number,
        private libellee ?: string,
        private frais_oppositionn ?: number
    ){}
    
    //Getters
    get code_opposition(){
        return this.code_oppositionn;
    }
    get libelle(){
        return this.libellee
    }
    get frais_opposition(){
        return this.frais_oppositionn
    }

    //Setters

    set code_opposition(code_opposition:number){
        this.code_oppositionn=code_opposition;
    }
    set libelle(libelle:string){
        this.libellee=libelle;
    }
    set frais_opposition(frais_oppositionn:number){
        this.frais_oppositionn=frais_oppositionn;
    }
}