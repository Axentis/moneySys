import { Component, OnInit } from '@angular/core';
import { Porteur } from 'src/app/model/porteur';
import { Banque } from 'src/app/model/Banque';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Carte } from 'src/app/model/Carte';

@Component({
  selector: 'app-info-porteur',
  templateUrl: './info-porteur.component.html',
  styleUrls: ['./info-porteur.component.css']
})
export class InfoPorteurComponent implements OnInit {

 
  porteur:Porteur[]=[this.Parameters.porteur]
  constructor(
    private globalService:GlobalService,
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) {
    
   }

  ngOnInit() {
    this.porteur=this.data.porteur
  }
  
  onCompte(porteur:Porteur){
    // console.log(compte)
      this.globalService.porteur =  porteur
    
    // navigate to handling porteur
    this.router.navigateByUrl('/formCarte');
  } 
}
