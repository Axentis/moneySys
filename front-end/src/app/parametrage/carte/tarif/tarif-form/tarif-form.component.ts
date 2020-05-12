import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/model/tarif';
import { DataService } from 'src/app/services/data.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarif-form',
  templateUrl: './tarif-form.component.html',
  styleUrls: ['./tarif-form.component.css']
})
export class TarifFormComponent implements OnInit {
  etat:boolean= this.Parameters.etat;
  tarif:Tarif = this.Parameters.tarif_carte
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }
  ngOnInit() {
    this.tarif = this.Parameters.tarif()
    this.Parameters.tarif_cartee=this.Parameters.tarif_carte
    console.log(this.Parameters.etat)
  }
  
  add()
  {
    this.data.pushTarif(this.tarif)
  }
}
