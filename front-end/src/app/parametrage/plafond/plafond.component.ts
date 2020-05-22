import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plafond',
  templateUrl: './plafond.component.html',
  styleUrls: ['./plafond.component.css']
})
//plafondFormCarte
export class PlafondComponent implements OnInit {
  plafond=[this.Parameters.plafond_carte]
  index:boolean
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.plafond=this.data.plafond_carte
  }
 
  Edit(p){
    this.Parameters.set_plafond_carte(p)
    this.Parameters.etattt(false)
    this.router.navigateByUrl("/plafondFormCarte")
    console.log(p)
  }
  add()
  {
    this.Parameters.etattt(true)
    this.router.navigateByUrl("/plafondFormCarte")
  }
  remove(i){
    this.data.supprimerPlafondCarte(i)
  }
}
