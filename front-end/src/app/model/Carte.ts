import { TypeCarte } from './type_carte';
import { Tarif } from './tarif';
import { ReseauAcceptaion } from './Reseaux';
import { Compte } from './compte';
import { Porteur } from './porteur';
import { InfoCarte } from './Info_carte';
import { Opposition } from './opposition';
import { Rechargement } from './Rechargement';
import { Renouvelement } from './RenouvelementCarte';

export class Carte{
    constructor(
        public Num?:number,
        public info?:InfoCarte,
        public renouvelement?:string,
        public IsActive?: boolean,
        public IsAnnule?:boolean,
        public IsRechargeable?:boolean,
        public rechargement ?:Rechargement[],
        public comptes?: Compte,
        public porteur?: Porteur,
        public date_renouvelement?:Renouvelement[],
        public oppositionn?: Opposition,
        // public reseau?: ReseauAcceptaion,
    ){}
    
}