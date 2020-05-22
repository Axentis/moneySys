import { Component, OnInit } from '@angular/core';
import { TypeCarte } from 'src/app/model/type_carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { PlafondCarte } from 'src/app/model/plafondCarte';

@Component({
  selector: 'app-plafond-form',
  templateUrl: './plafond-form.component.html',
  styleUrls: ['./plafond-form.component.css']
})
export class PlafondFormComponent implements OnInit {

  etat:boolean= this.Parameters.etat;
  plafond:PlafondCarte=this.Parameters.plafond_carte
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.etat=this.Parameters.etat
    if(this.etat==true)
    {
      this.plafond.code_plafond=this.data.plafond_carte[this.data.plafond_carte.length-1].code_plafond+1
    }
    else{
      this.plafond = this.Parameters.plafond()
    }
    this.Parameters.plafond_cartee=this.Parameters.plafond_carte
    console.log(this.Parameters.etat)
    console.log(this.Parameters.etat)
  }
  add()
  {
    this.data.pushPlafond(this.plafond);
    this.router.navigateByUrl("/plafondCarte");
  }

}
