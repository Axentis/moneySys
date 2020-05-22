import { Component, OnInit } from '@angular/core';
import { TarifCarte } from 'src/app/model/tarif-carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarif-carte-form',
  templateUrl: './tarif-carte-form.component.html',
  styleUrls: ['./tarif-carte-form.component.css']
})
export class TarifCarteFormComponent implements OnInit {

  etat:boolean= true;
  tarif:TarifCarte = this.Parameters.tarif_carte
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }
  ngOnInit() {
    this.etat=this.Parameters.etat
    if(this.etat==true)
    {
      this.tarif.code_tarif=this.data.tarif_carte[this.data.tarif_carte.length-1].code_tarif+1
    }
    else{
      this.tarif = this.Parameters.tarifCart()
    }
    this.Parameters.tarif_cartee=this.Parameters.tarif_carte
    console.log(this.Parameters.etat)
  }
  
  add()
  {
    this.data.pushTarifCarte(this.tarif)
    this.router.navigateByUrl("/tarifCarte")
  }
}
