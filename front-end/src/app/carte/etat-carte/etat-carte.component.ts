import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etat-carte',
  templateUrl: './etat-carte.component.html',
  styleUrls: ['./etat-carte.component.css']
})
export class EtatCarteComponent implements OnInit {
  carte:Carte[]=[this.Parameters.carte]
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.carte=this.data.carte

}
}
