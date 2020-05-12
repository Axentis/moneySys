import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { GlobalService } from 'src/app/services/global.service';
import { DataService } from 'src/app/services/data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-des-cartes',
  templateUrl: './gestion-des-cartes.component.html',
  styleUrls: ['./gestion-des-cartes.component.css']
})
export class GestionDesCartesComponent implements OnInit {
  cartes:Carte[]=[this.Parameter.carte]
  constructor(
    private globalService:GlobalService,
    private Parameter: ParametersService,
    private data:DataService,
    private router : Router
  ) { }
  
  ngOnInit() {
    this.cartes=this.data.carte
    
    /* this.globalService.carte=this.Parameter.carte
    this.globalService.porteur=this.Parameter.porteur */
  }
    addCarte(){
      this.router.navigateByUrl("/formCarte")
      this.Parameter.etattt(true)
      this.Parameter.set_carte(this.Parameter.carte)
      this.globalService.info_carte=this.Parameter.info_carte
      this.globalService.porteur=this.Parameter.porteur
    }
    Edit(c){
      this.Parameter.set_carte(c)
      this.Parameter.etattt(false)
      this.router.navigateByUrl("/formCarte")
      console.log(c)
    }
    remove(i){
      this.cartes.splice(i, 1);
    }

}
