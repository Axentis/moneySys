export class TarifCarte{
    constructor(private code_tariff?:number,
                private libillee?:string,
                private commissionFixee?:number,
                private taxeCommm?:number,                
                ){}

        //getters
    get code_tarif(){
        return this.code_tariff;
    }

    get libille(){
        return this.libillee;
    }

   
    get commissionFixe(){
        return this.commissionFixee;
    }
   
    get taxeComm(){
        return this.taxeCommm;
    }
    //Setters
    set code_tarif(code:number)
    {
        this.code_tariff=code;
    }

    set libille(libelle:string){
        this.libillee=libelle;
    }
    
    set commissionFixe(comm:number){
        this.commissionFixee=comm;
    }
    set taxeComm(taxe){
        this.taxeCommm=taxe;
    }
    

    
}