import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'annuler-carte',
  templateUrl: './annuler-carte.component.html',
  styleUrls: ['./annuler-carte.component.css']
})
export class AnnulerCarteComponent implements OnInit {
  carte=[ this.Parameters.carte]
  etat:boolean=false
  config: any;
  collection = { count: 60, data: [] };
  n:number
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
    this.data.carte.forEach(element => {
      if(element.IsAnnule==false ){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)
    console.log(this.carte[0])

  }
  annuler(i){
    let index:number=-1
    this.data.carte.forEach(element=>{
      index++
      if(this.carte[i].Num==element.Num){
        this.data.carte[index].IsAnnule=true
      }
    })
    this.carte.splice(i,1)
    this.router.navigateByUrl("/annulationCarte")
    console.log("nice nice")
    this.n=i    
    this.etat=true
  }
}
