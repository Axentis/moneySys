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

  carte=[ this.Parameters.info_carte]
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
    this.data.info_carte.forEach(element=>{
      if(this.globalService.info_carte==element){
        this.globalService.info_carte=this.Parameters.info_carte
        alert("aaaa")
      }
    })
      this.globalService.info_carte =  carte
      alert(this.globalService.info_carte.type.code_type)
    // navigate to handling carte
    this.router.navigateByUrl('/formCarte');

  }
}
