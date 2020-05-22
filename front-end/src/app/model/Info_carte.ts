import { TypeCarte } from './type_carte';
import { Tarif } from './tarif';
import { TarifCarte } from './tarif-carte';

export class InfoCarte{
    constructor(
        public BIN?:number,
        public type?:TypeCarte,
        public tarif?:TarifCarte,
        public etat?:string,
    ){}
}