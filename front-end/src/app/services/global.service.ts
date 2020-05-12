import { Injectable } from '@angular/core';
import { Porteur } from '../model/porteur'
import { Carte } from '../model/Carte';
import { InfoCarte } from '../model/Info_carte';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public porteur: Porteur;
  public info_carte:InfoCarte;

  constructor() { }
}
