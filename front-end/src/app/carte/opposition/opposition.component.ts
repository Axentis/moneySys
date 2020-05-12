import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opposition',
  templateUrl: './opposition.component.html',
  styleUrls: ['./opposition.component.css']
})
export class OppositionComponent implements OnInit {
 n:number
  carte:Carte[]=[this.Parameters.carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.data.carte.forEach(element => {
      if(element.info.etat=="o"){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)
  }
  Edit(c,i){
    this.carte[i].info.etat="f"
    this.carte.splice(i,1)
    this.n=i;
  }
  //opposition
  addOpposition(){}
}
