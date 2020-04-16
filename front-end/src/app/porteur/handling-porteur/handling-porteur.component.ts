import { Component, OnInit, OnDestroy } from '@angular/core';
import { Porteur } from 'src/app/model/porteur';
import { Compte } from 'src/app/model/compte';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-handling-porteur',
  templateUrl: './handling-porteur.component.html',
  styleUrls: ['./handling-porteur.component.css']
})
export class HandlingPorteurComponent implements OnInit, OnDestroy {

  porteur: Porteur = {
    nom: "",
    prenom: " ",
    cin: "",
    compte: {
      bin: "",
      client: ""
    },
    sex:"",
    situationFamiliale:"",
  };

  constructor(
    private globalService: GlobalService ) { }

  ngOnInit() {
    if (this.globalService.porteur) {
      this.porteur = this.globalService.porteur;
    }
  }


  ngOnDestroy() {
    this.globalService.porteur = this.porteur;

  }

}
