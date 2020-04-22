export class Compte{
    bin:string;
    client:string;

    constructor(bin = "", client = ""){
        this.bin = bin;
        this.client = client;
    }
}