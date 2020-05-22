export class Tarif{
    constructor(private code_tariff?:number,
                private libillee?:string,
                private plafondCartee?: number,
                private plafondCarteGoldd?:number,
                private commissionFixee?:number,
                private commmissionMinn?:number,
                private commissionMaxx?:number,
                private tauxCommDebitt?:number,
                private tauxcommCreditt?:number,
                private taxeCommm?:number,
                private tauxInterCommm?:number,
                private tauxInterTranss?:number
                ){}

        //getters
    get code_tarif(){
        return this.code_tariff;
    }

    get libille(){
        return this.libillee;
    }

    get plafondCarte(){
        return this.plafondCartee;
    }
    get plafondCarteGold(){
        return this.plafondCarteGoldd;
    }
    get commissionFixe(){
        return this.commissionFixee;
    }
    get commmissionMin(){
        return this.commmissionMinn;
    }
    get commissionMax(){
        return this.commissionMaxx;
    }
    get tauxCommDebit(){
        return this.tauxCommDebitt;
    }
    get tauxcommCredit(){
        return this.tauxcommCreditt;
    }
    get taxeComm(){
        return this.taxeCommm;
    }
    get tauxInterComm(){
        return this.tauxInterCommm;
    }
    get tauxInterTrans(){
        return this.tauxInterTranss;
    }


    //Setters
    set code_tarif(value)
    {
        this.code_tariff=value;
    }

    set libille(value){
        this.libillee=value;
    }
    set plafondCarteGold(value){
        this.plafondCarteGoldd=value;
    }
    set commissionFixe(value){
        this.commissionFixee=value;
    }
    set commmissionMin(value){
        this.commmissionMinn=value;
    }
    set commissionMax(value){
        this.commissionMaxx=value;
    }
    set tauxCommDebit(value){
        this.tauxCommDebitt=value;
    }
    set tauxcommCredit(value){
        this.tauxcommCreditt=value;
    }
    set taxeComm(value){
        this.taxeCommm=value;
    }
    set tauxInterComm(value){
        this.tauxInterCommm=value;
    }
    set tauxInterTrans(value){
        this.tauxInterTranss=value;
    }

    
}