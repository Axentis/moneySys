import { TypeCarte } from './type_carte';
import { Tarif } from './tarif';
import { ReseauAcceptaion } from './Reseaux';
import { Compte } from './compte';
import { Porteur } from './porteur';
import { InfoCarte } from './Info_carte';

export class Carte{
    constructor(
        public Num?:number,
        public info?:InfoCarte,
        public renouvelement?:string,
        public IsActive?: boolean,
        public IsAnnule?:boolean,
        public IsRechargeable?:boolean,
        public comptes?: Compte[],
        public porteur?: Porteur,
        public dateDeb?: Date,
        public dateFin?: Date
        // public reseau?: ReseauAcceptaion,
    ){}
    
}