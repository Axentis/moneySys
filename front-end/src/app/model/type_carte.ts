export class TypeCarte{
    constructor(
        private code_typee?: number,
        private typee?:string,
        private plafondd?:number,
        private plafondGoldd?:number,
    ){}
    
    //getters
    get code_type(){
        return this.code_typee;
    }

    get type(){
        return this.typee;
    }
    get plafond(){
        return this.plafondd;
    }
    get plafondGold(){
        return this.plafondGoldd;
    }

    //Setters
    set code_type(code:number)
    {
        this.code_typee=code;
    }
    set type(type:string){
        this.typee=type;
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