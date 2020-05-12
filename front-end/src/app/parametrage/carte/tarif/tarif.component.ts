import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  tarif= [this.Parameters.tarif_carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.tarif=this.data.tarif_carte

  }
  Edit(t){
    this.Parameters.set_tarif_carte(t)
    this.Parameters.etattt(false)
    this.router.navigateByUrl("/tarifFormCarte")
    console.log(t)
  }
  add()
  {
    this.Parameters.etattt(true)
    this.router.navigateByUrl("/tarifFormCarte")
  }
  remove(i){
    this.tarif.splice(i, 1);
  }
}
