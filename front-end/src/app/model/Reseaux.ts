export class ReseauAcceptaion{
    constructor(
            private numm?: number,
            private nomm?: string
    ){}
     //getters
     get num(){
        return this.numm;
    }

    get nom(){
        return this.nomm;
    }

    //Setters
    set num(value)
    {
        this.numm=value;
    }
    set type(value){
        this.nomm=value;
    }
} 