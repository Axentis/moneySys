import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agence } from 'src/app/model/agence';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {


  agences:Agence[];

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.agences = this.globalService.getAgences();
  }

  onAgence(agence:Agence){
    // console.log(compte)

    if(this.globalService.porteur){
      this.globalService.porteur.agence  =  agence
    }
    
    // navigate to handling porteur
    this.router.navigate(['porteur/ajouterPorteur']);

  }

}
