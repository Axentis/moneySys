import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annulation',
  templateUrl: './annulation.component.html',
  styleUrls: ['./annulation.component.css']
})
export class AnnulationComponent implements OnInit {

  carte:Carte[]=[this.Parameters.carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.data.carte.forEach(element => {
      if(element.IsAnnule==true){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)
  }
  Edit(c,i){
    this.carte[i].IsAnnule=false
    this.carte.splice(i,1)
  }
}