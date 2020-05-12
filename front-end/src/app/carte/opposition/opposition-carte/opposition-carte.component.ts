import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ParametersService } from 'src/app/services/parameters.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'opposition-carte',
  templateUrl: './opposition-carte.component.html',
  styleUrls: ['./opposition-carte.component.css']
})
export class OppositionCarteComponent implements OnInit {
  carte=[ this.Parameters.carte]
  etat:boolean=false
  config: any;
  collection = { count: 60, data: [] };
  n:number
  constructor(
    private globalService:GlobalService,
    private Parameters:ParametersService,
    private data :DataService,
    private router:Router) {}
  ngOnInit() {
    this.data.carte.forEach(element => {
      if(element.info.etat!="o"){
        this.carte.push(element)
      }
    });
    this.carte.splice(0,1)
    console.log(this.carte[0])

  }
  opposer(i){
    let index:number=-1
    this.data.carte.forEach(element=>{
      index++
      if(this.carte[i].Num==element.Num){
        this.data.carte[index].info.etat="o"
      }
    })
    this.carte.splice(i,1)
    console.log("nice nice",index)
    this.n=i    
    this.etat=true
  }

}
