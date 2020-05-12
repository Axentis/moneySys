import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechargement',
  templateUrl: './rechargement.component.html',
  styleUrls: ['./rechargement.component.css']
})
export class RechargementComponent implements OnInit {

  carte:Carte[]=[this.Parameters.carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.data.carte.forEach(element => {
      if(element.renouvelement!="non renouvelable" 
        && element.IsAnnule==false 
        && element.info.etat !="o"
        && element.comptes[0].solde > 7){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)

  }  
  Edit(c){}
  Recharger(){}
}
