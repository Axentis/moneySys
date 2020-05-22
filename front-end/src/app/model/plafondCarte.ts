export class PlafondCarte{
    constructor(
        private code_plafondd?: number,
        private plafondd?:number,
        private plafondGoldd?:number,
    ){}
    
    //getters
    get code_plafond(){
        return this.code_plafondd;
    }

    get plafond(){
        return this.plafondd;
    }
    get plafondGold(){
        return this.plafondGoldd;
    }

    //Setters
    set code_plafond(code:number)
    {
        this.code_plafondd=code;
    }
    
    set plafond(plafond:number)
    {
        this.plafondd=plafond;
    }
    set plafondGold(plafondGold:number)
    {
        this.plafondGoldd=plafondGold;
    }
}