import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Carte } from 'src/app/model/Carte';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-info-carte',
  templateUrl: './info-carte.component.html',
  styleUrls: ['./info-carte.component.css']
})
export class InfoCarteComponent implements OnInit {

  carte=[ this.Parameters.info_carte
    /*new Carte(1,1234)*//* "GOLD",4,"f"),
    new Carte(2,1235,"Etudiant",5,"i"),
    new Carte(3,1236,"GOLD",6,"o"),
    new Carte(4,1237,"GOLD",3,"f"),
    new Carte(1,1234,"GOLD",2,"f"),
    new Carte(1,1234,"GOLD",5,"o"),
    new Carte(1,1234,"GOLD",4,"f"),
    new Carte(1,1234,"GOLD",3,"i"),
    new Carte(1,1234,"GOLD",6,"o"), */
  ]
  config: any;
  collection = { count: 60, data: [] };
 
  constructor(
    private globalService:GlobalService,
    private Parameters:ParametersService,
    private data :DataService,
    private router:Router) {
    //Create dummy data
    /* for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: this.carte[i]
        }
      );
    }
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    }; */
  }
  ngOnInit(): void {
    this.carte=this.data.info_carte
  }
 
  /* pageChanged(event){
    this.config.currentPage = event;
  }  */
  
  onCompte(carte){
    // console.log(compte)
      this.globalService.info_carte =  carte
    // navigate to handling carte
    this.router.navigateByUrl('/formCarte');

  }
}
