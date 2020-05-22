import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/model/Carte';
import { GlobalService } from 'src/app/services/global.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renouvelement-affiche',
  templateUrl: './renouvelement-affiche.component.html',
  styleUrls: ['./renouvelement-affiche.component.css']
})
export class RenouvelementAfficheComponent implements OnInit {

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
