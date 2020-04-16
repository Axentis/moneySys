import { Injectable } from '@angular/core';
import { Porteur } from '../model/porteur'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public porteur: Porteur;

  constructor() { }
}
