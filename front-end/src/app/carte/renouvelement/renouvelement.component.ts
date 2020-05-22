import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { Carte } from 'src/app/model/Carte';

@Component({
  selector: 'app-renouvelement',
  templateUrl: './renouvelement.component.html',
  styleUrls: ['./renouvelement.component.css']
})
export class RenouvelementComponent implements OnInit {

  carte:Carte[]=[this.Parameters.carte];
  index:number;
  constructor(
    private Parameters:ParametersService,
    private data:DataService,
    private router:Router
  ) { 
  }

  ngOnInit() {
    this.data.carte.forEach(element => {
      if(element.renouvelement!="non renouvelable"){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)

  }  
  /* affiche(){
    for (let i=0;i<this.data.carte.length;i++){
      if(this.data.carte[i].renouvelement=="renouvelable" || this.data.carte[i]=="à définir"){
        this.carte.push(this.data.carte[i])
      }
    }
  } */
  Renouveller(){
    this.router.navigateByUrl("renouvelementFormCarte")
  }
  afficher(c){
    this.Parameters.set_carte(c)
    this.index=c.Num
    this.router.navigateByUrl("/renouvelementAfficheCarte")
    console.log(c)
  }
}
