export class TypeCarte{
    constructor(
        private code_typee?: number,
        private typee?:string
    ){}
    
    //getters
    get code_type(){
        return this.code_typee;
    }

    get type(){
        return this.typee;
    }

    //Setters
    set code_type(code:number)
    {
        this.code_typee=code;
    }
    set type(type:string){
        this.typee=type;
    }
}