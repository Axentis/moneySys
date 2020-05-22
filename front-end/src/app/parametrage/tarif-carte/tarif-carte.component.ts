import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarif-carte',
  templateUrl: './tarif-carte.component.html',
  styleUrls: ['./tarif-carte.component.css']
})
export class TarifCarteComponent implements OnInit {

  tarif=[this.Parameters.tarif_carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

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
    this.data.supprimerTarifCarte(i)
    //this.tarif.splice(i, 1);
  }

}
