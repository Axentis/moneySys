import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Carte } from 'src/app/model/Carte';

@Component({
  selector: 'rechargement-affiche',
  templateUrl: './rechargement-affiche.component.html',
  styleUrls: ['./rechargement-affiche.component.css']
})
export class RechargementAfficheComponent implements OnInit {

  carte:Carte=this.Parameters.carte
  constructor(
    private globalService:GlobalService,
    private Parameters:ParametersService,
    private data :DataService,
    private router:Router) { }

  ngOnInit() {
    this.carte = this.Parameters.cart()
    this.Parameters.cartee=this.Parameters.carte
  }
  
}
