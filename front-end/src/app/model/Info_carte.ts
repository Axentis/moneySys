import { TypeCarte } from './type_carte';
import { Tarif } from './tarif';

export class InfoCarte{
    constructor(
        public BIN?:number,
        public type?:TypeCarte,
        public tarif?:Tarif,
        public etat?:string,
    ){}
}